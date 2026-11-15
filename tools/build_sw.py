#!/usr/bin/env python3
"""生成 sw.js：让网站在孩子的设备上存一份，之后打开直接从本机读。

每个文件按内容算一个短指纹写进 sw.js。网页更新后，设备只重新下载指纹变了的文件，
其余从旧的本机副本里搬过来。改了 index.html / data.js / assets / audio 之后必须重跑
（本地 git pre-commit 钩子会自动跑并把 sw.js 加进提交）。

用法：python3 tools/build_sw.py
"""
import hashlib
import json
import pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent
INCLUDE = ["index.html", "data.js"]
DIRS = ["assets", "audio"]

TEMPLATE = r"""// 自动生成，别手改：python3 tools/build_sw.py
// 小小探索岛的本机副本。第一次打开后在后台把页面、图片、语音存到这台设备；
// 之后打开直接从本机读。网页更新时只下载内容变了的文件（按指纹比对）。
const V = '__VERSION__';
const FILES = __FILES__;
const CACHE = 'island-' + V;
const SCOPE = new URL(self.registration.scope);
const key = p => new URL(p + '?h=' + FILES[p], SCOPE).href;

self.addEventListener('install', e => {
  e.waitUntil((async () => {
    const c = await caches.open(CACHE);
    const olds = [];
    for (const k of await caches.keys()) if (k.startsWith('island-') && k !== CACHE) olds.push(await caches.open(k));
    const todo = Object.keys(FILES);
    let failed = 0;
    async function one(p) {
      const k = key(p);
      if (await c.match(k)) return;                     // 上次装到一半已经存过
      for (const o of olds) { const r = await o.match(k); if (r) return c.put(k, r); }  // 没变的文件从旧副本搬
      const r = await fetch(k, {cache: 'no-cache'});    // 只有变了的才下载
      if (!r.ok) throw new Error(p + ' ' + r.status);
      await c.put(k, r);
    }
    async function worker() { while (todo.length) { const p = todo.shift(); try { await one(p); } catch (err) { failed++; } } }
    await Promise.all([worker(), worker(), worker(), worker()]);
    if (failed) throw new Error(failed + ' files failed');  // 没装全就不启用，下次打开接着装
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', e => {
  e.waitUntil((async () => {
    for (const k of await caches.keys()) if (k.startsWith('island-') && k !== CACHE) await caches.delete(k);
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', e => {
  const u = new URL(e.request.url);
  if (e.request.method !== 'GET' || u.origin !== SCOPE.origin || !u.pathname.startsWith(SCOPE.pathname)) return;
  let p = decodeURIComponent(u.pathname.slice(SCOPE.pathname.length));
  if (p === '') p = 'index.html';
  if (!FILES[p]) return;
  e.respondWith((async () => {
    const r = await (await caches.open(CACHE)).match(key(p));
    if (!r) return fetch(e.request);
    const range = e.request.headers.get('range');
    if (!range) return r;
    // Safari 放音频会带 Range 请求，必须回 206，否则声音放不出来
    const buf = await r.arrayBuffer(), size = buf.byteLength;
    const m = /bytes=(\d*)-(\d*)/.exec(range) || [];
    let start = m[1] ? +m[1] : Math.max(0, size - (+m[2] || size));
    let end = m[1] && m[2] ? Math.min(+m[2], size - 1) : size - 1;
    return new Response(buf.slice(start, end + 1), {status: 206, headers: {
      'Content-Type': r.headers.get('Content-Type') || 'application/octet-stream',
      'Content-Range': `bytes ${start}-${end}/${size}`, 'Content-Length': String(end - start + 1), 'Accept-Ranges': 'bytes'}});
  })());
});
"""


def main():
    files = {}
    paths = [ROOT / n for n in INCLUDE]
    for d in DIRS:
        paths += sorted(p for p in (ROOT / d).rglob("*") if p.is_file())
    for p in paths:
        files[p.relative_to(ROOT).as_posix()] = hashlib.sha1(p.read_bytes()).hexdigest()[:10]
    version = hashlib.sha1(json.dumps(files, sort_keys=True).encode()).hexdigest()[:10]
    out = TEMPLATE.replace("__VERSION__", version).replace("__FILES__", json.dumps(files, ensure_ascii=False, indent=0))
    target = ROOT / "sw.js"
    old = target.read_text(encoding="utf-8") if target.exists() else ""
    if old != out:
        target.write_text(out, encoding="utf-8")
    size = sum(p.stat().st_size for p in paths)
    print(f"sw.js: {len(files)} files, {size/1e6:.1f} MB, version {version}{'' if old != out else ' (unchanged)'}")


if __name__ == "__main__":
    main()
