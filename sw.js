// 自动生成，别手改：python3 tools/build_sw.py
// 小小探索岛的本机副本。第一次打开后在后台把页面、图片、语音存到这台设备；
// 之后打开直接从本机读。网页更新时只下载内容变了的文件（按指纹比对）。
const V = '97dc6f73ca';
const FILES = {
"index.html": "e037f814c2",
"data.js": "2a084ce03c",
"assets/chest.webp": "24235b6e82",
"assets/cv-shh-p1.webp": "9a7339058e",
"assets/cv-shh-p10.webp": "bdaf8285e4",
"assets/cv-shh-p11.webp": "566cff1837",
"assets/cv-shh-p12.webp": "7964e4492b",
"assets/cv-shh-p13.webp": "6dbbb526ac",
"assets/cv-shh-p14.webp": "f4985a8c18",
"assets/cv-shh-p15.webp": "57e93d85ce",
"assets/cv-shh-p16.webp": "a136c100a4",
"assets/cv-shh-p17.webp": "9762afe196",
"assets/cv-shh-p18.webp": "1e18946dc7",
"assets/cv-shh-p19.webp": "bf2e02b4bc",
"assets/cv-shh-p2.webp": "4c7739d71e",
"assets/cv-shh-p20.webp": "758e6b1121",
"assets/cv-shh-p3.webp": "0226a9953b",
"assets/cv-shh-p4.webp": "484bf36521",
"assets/cv-shh-p5.webp": "b0970ff96e",
"assets/cv-shh-p6.webp": "03f8b16cba",
"assets/cv-shh-p7.webp": "2383b11125",
"assets/cv-shh-p8.webp": "a513f003bb",
"assets/cv-shh-p9.webp": "6c88296caf",
"assets/guide.webp": "3b05691742",
"assets/island-wide.webp": "5d90a4e744",
"assets/island.webp": "0627ce6ead",
"assets/place-dino.webp": "c967ad4927",
"assets/place-english.webp": "a78d68360e",
"assets/place-lab.webp": "eb6a4d857b",
"assets/place-myth.webp": "a2e1e0982a",
"assets/place-stage.webp": "f8f163fb74",
"assets/place-swim.webp": "9abf129a0a",
"assets/place-vet.webp": "fa9a1899f5",
"assets/place-zoo.webp": "2da8ea40f5",
"assets/pt-p01.webp": "b960d714be",
"assets/pt-p02.webp": "f4e0f180a2",
"assets/pt-p03.webp": "4f9d24d91e",
"assets/pt-p04.webp": "016a7b3c85",
"assets/pt-p05.webp": "b8d52c7836",
"assets/pt-p06.webp": "3c76aa245b",
"assets/pt-p07.webp": "85a3350aa5",
"assets/pt-p08.webp": "ddbfe3ffe5",
"assets/pt-p09.webp": "984ab62e34",
"assets/pt-p10.webp": "97662992f0",
"assets/pt-p11.webp": "60fbac2530",
"assets/pt-p12.webp": "e6cae40e87",
"assets/pt-p13.webp": "a4239a06f2",
"assets/pt-p14.webp": "29f1e2dc24",
"audio/line-afterPatient.mp3": "f1beed1448",
"audio/line-chest.mp3": "9fe0300da8",
"audio/line-dayDone.mp3": "08fa111804",
"audio/line-endDone.mp3": "f5e3e9a658",
"audio/line-home.mp3": "aabb2c38c7",
"audio/line-liked.mp3": "5c8768a181",
"audio/line-patientIntro.mp3": "d155ef5369",
"audio/line-rest.mp3": "17837e43b0",
"audio/line-tooLong.mp3": "a6edad6302",
"audio/line-tryDone.mp3": "9a4f3c49e4",
"audio/line-wonder.mp3": "b625da49a0",
"audio/manifest.json": "8856d96d2c",
"audio/name-dino.mp3": "2d183b2074",
"audio/name-english.mp3": "91d1355bcc",
"audio/name-lab.mp3": "f2703755e1",
"audio/name-myth.mp3": "168cbad5c5",
"audio/name-stage.mp3": "092b96d94a",
"audio/name-swim.mp3": "2781688b7f",
"audio/name-vet.mp3": "bd099b2a7d",
"audio/name-zoo.mp3": "3dc57ae67d",
"audio/p-p01.mp3": "0043c419d6",
"audio/p-p02.mp3": "213b75e4bb",
"audio/p-p03.mp3": "6f8f7e940d",
"audio/p-p04.mp3": "2e65655d03",
"audio/p-p05.mp3": "4b4b250d46",
"audio/p-p06.mp3": "505c2c3d3f",
"audio/p-p07.mp3": "82183e6bc2",
"audio/p-p08.mp3": "47fdcbb7ae",
"audio/p-p09.mp3": "edb318c0c1",
"audio/p-p10.mp3": "18490a9cae",
"audio/p-p11.mp3": "d1856cc82a",
"audio/p-p12.mp3": "de3a31be10",
"audio/p-p13.mp3": "ebcb44159b",
"audio/p-p14.mp3": "099a370e81",
"audio/place-dino.mp3": "42f69c40df",
"audio/place-english.mp3": "5da03e9ba2",
"audio/place-lab.mp3": "169e55b8ea",
"audio/place-myth.mp3": "6239cdb1d2",
"audio/place-stage.mp3": "7d911b2461",
"audio/place-swim.mp3": "1e1d335e0d",
"audio/place-vet.mp3": "8693f0363b",
"audio/place-zoo.mp3": "4b52a9dd97",
"audio/t-BV128411M7Au.mp3": "61e4cde8c0",
"audio/t-BV12P4y1P77C.mp3": "25d3c3d288",
"audio/t-BV145411u7wH.mp3": "ffadae9624",
"audio/t-BV15hyrBJEbD.mp3": "34cc6cef76",
"audio/t-BV17p4y1S7zG.mp3": "82feeeedaf",
"audio/t-BV1884y15755-p1.mp3": "6961108210",
"audio/t-BV1884y15755-p10.mp3": "f4660be148",
"audio/t-BV1884y15755-p11.mp3": "96cf5cd971",
"audio/t-BV1884y15755-p12.mp3": "648009f1bc",
"audio/t-BV1884y15755-p13.mp3": "acbe1784ac",
"audio/t-BV1884y15755-p14.mp3": "f316d332c2",
"audio/t-BV1884y15755-p15.mp3": "adc17b475b",
"audio/t-BV1884y15755-p16.mp3": "8aea6ebe8d",
"audio/t-BV1884y15755-p17.mp3": "cfd825d51e",
"audio/t-BV1884y15755-p18.mp3": "d8460f4fa1",
"audio/t-BV1884y15755-p19.mp3": "5e1d117a9c",
"audio/t-BV1884y15755-p2.mp3": "321cb6048b",
"audio/t-BV1884y15755-p20.mp3": "d4ed4bd209",
"audio/t-BV1884y15755-p3.mp3": "a50ea10294",
"audio/t-BV1884y15755-p4.mp3": "313a94a1ce",
"audio/t-BV1884y15755-p5.mp3": "c99d7501a1",
"audio/t-BV1884y15755-p6.mp3": "214a9e61ab",
"audio/t-BV1884y15755-p7.mp3": "651a97a012",
"audio/t-BV1884y15755-p8.mp3": "bb4bef2707",
"audio/t-BV1884y15755-p9.mp3": "8d02cba43a",
"audio/t-BV1934y1Q7Pn.mp3": "47bab5912d",
"audio/t-BV1BE411G7BG.mp3": "fdd26e0387",
"audio/t-BV1BR4Y6ZEEX.mp3": "a675d34a4a",
"audio/t-BV1BT4y1t7sz.mp3": "5f0f623865",
"audio/t-BV1Bj421Q7eB.mp3": "66a7ff578b",
"audio/t-BV1By4y1g7sB.mp3": "d66e1dc9ea",
"audio/t-BV1C7411A77Y.mp3": "463a356b68",
"audio/t-BV1GT4y1u7kC.mp3": "ce7714915a",
"audio/t-BV1HJ41117S8.mp3": "a5d0cd7bfb",
"audio/t-BV1KRB9BfEob.mp3": "c48bc33e4f",
"audio/t-BV1Pa4y1L76D.mp3": "0298d17f16",
"audio/t-BV1SW411w7Ng.mp3": "3259edac25",
"audio/t-BV1SY411Z77K.mp3": "ac27682802",
"audio/t-BV1Tt411S7zc.mp3": "603e2a5540",
"audio/t-BV1UN411Y7Ji.mp3": "8215e1fb05",
"audio/t-BV1YogDzkEgb.mp3": "6ec839376c",
"audio/t-BV1aE41127cV.mp3": "c30e1151cf",
"audio/t-BV1au4m1w7Zn.mp3": "c8ecf274ef",
"audio/t-BV1cJ411K7t9.mp3": "b6c291aa81",
"audio/t-BV1g34y1H7Vp.mp3": "3b5cf2ade0",
"audio/t-BV1gS4y1p7Fj.mp3": "d05a00c32b",
"audio/t-BV1gx411B7kJ-p15.mp3": "83125713e4",
"audio/t-BV1gx411B7kJ-p16.mp3": "68033643a7",
"audio/t-BV1gx411B7kJ-p27.mp3": "4398e8492d",
"audio/t-BV1gx411B7kJ-p3.mp3": "a4c6d43ca8",
"audio/t-BV1gx411B7kJ-p52.mp3": "c2196e6f56",
"audio/t-BV1hT4y1T7b6.mp3": "bfaa7dfc58",
"audio/t-BV1ho4y1u7oV.mp3": "c0048c1bc8",
"audio/t-BV1i24y1F7aQ.mp3": "3d8f42173b",
"audio/t-BV1iz421X7Un.mp3": "0f8bbe51e4",
"audio/t-BV1jHjnz2EfP.mp3": "8d0c462c56",
"audio/t-BV1mJ411R7SV.mp3": "82ac0e4fe0",
"audio/t-BV1nb4y1f7p6.mp3": "11c327afb4",
"audio/t-BV1pV41167YR.mp3": "2ed717107b",
"audio/t-BV1qp4y1U7yM.mp3": "a21e558013",
"audio/t-BV1rJhizPE8z-p1.mp3": "bf1fa72c1e",
"audio/t-BV1rJhizPE8z-p13.mp3": "aca5473535",
"audio/t-BV1rJhizPE8z-p18.mp3": "421ae99d20",
"audio/t-BV1rJhizPE8z-p2.mp3": "27f74859e0",
"audio/t-BV1rJhizPE8z-p3.mp3": "613751931c",
"audio/t-BV1rJhizPE8z-p6.mp3": "72da4ef3e1",
"audio/t-BV1rsoLYcE3R.mp3": "01f8de0c64",
"audio/t-BV1sD4y1N7b6.mp3": "1a21b6135b",
"audio/t-BV1yDD4YnEqV.mp3": "136816d0bb",
"audio/t-ep770492.mp3": "8fca6f48aa",
"audio/try-dino-0.mp3": "f7d4669630",
"audio/try-dino-1.mp3": "0ef6cf131c",
"audio/try-dino-2.mp3": "d6f82c39cd",
"audio/try-english-0.mp3": "acf0c3f158",
"audio/try-english-1.mp3": "aa1e8d81d6",
"audio/try-english-2.mp3": "76a41baaf2",
"audio/try-lab-0.mp3": "86c481dd73",
"audio/try-lab-1.mp3": "b99d3a587f",
"audio/try-lab-2.mp3": "39da922aff",
"audio/try-myth-0.mp3": "fcbdc22c7b",
"audio/try-myth-1.mp3": "41339c9299",
"audio/try-myth-2.mp3": "d9a1b9b8a3",
"audio/try-stage-0.mp3": "6e816f928c",
"audio/try-stage-1.mp3": "d6a40ab389",
"audio/try-stage-2.mp3": "890e2d3819",
"audio/try-swim-0.mp3": "fe6fbedc5a",
"audio/try-swim-1.mp3": "0fc0dbb88f",
"audio/try-swim-2.mp3": "78899ff230",
"audio/try-vet-0.mp3": "38376633cd",
"audio/try-vet-1.mp3": "9ab334dcea",
"audio/try-vet-2.mp3": "a28fbd047d",
"audio/try-zoo-0.mp3": "1bdbd2f7a8",
"audio/try-zoo-1.mp3": "b2791d9613",
"audio/try-zoo-2.mp3": "8f902e2ae3"
};
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
