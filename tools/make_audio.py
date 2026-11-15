"""把 data.js 里孩子要听的文字生成语音（edge-tts，小艺声音）。已生成且文字没变的跳过。
用法：python3 tools/make_audio.py   （需要 pip install edge-tts）"""
import asyncio, json, re, hashlib
from pathlib import Path
import edge_tts
ROOT = Path(__file__).resolve().parent.parent
AUD = ROOT / "audio"; AUD.mkdir(exist_ok=True)
DATA = json.loads(re.search(r"^const DATA = (\{.*\});$", (ROOT/"data.js").read_text(encoding="utf-8"), re.M).group(1))
VOICE, RATE, PITCH = "zh-CN-XiaoyiNeural", "-5%", "+8Hz"
items = {}
for v in DATA["videos"]: items[f"t-{v['id']}"] = v["kidTitle"]
for p in DATA["patients"]: items[f"p-{p['id']}"] = p["say"]
for pl in DATA["places"]:
    items[f"place-{pl['id']}"] = pl["hello"]; items[f"name-{pl['id']}"] = pl["name"]
    for i, t in enumerate(DATA["tries"][pl["id"]]): items[f"try-{pl['id']}-{i}"] = t
for k, t in DATA["lines"].items(): items[f"line-{k}"] = t
man_p = AUD / "manifest.json"
man = json.loads(man_p.read_text(encoding="utf-8")) if man_p.exists() else {}
async def main():
    n = 0
    for k, text in items.items():
        h = hashlib.sha1(f"{VOICE}{RATE}{PITCH}{text}".encode()).hexdigest()[:12]
        f = AUD / f"{k}.mp3"
        if f.exists() and man.get(k) == h: continue
        await edge_tts.Communicate(text, VOICE, rate=RATE, pitch=PITCH).save(str(f))
        man[k] = h; n += 1
    for f in AUD.glob("*.mp3"):
        if f.stem not in items: f.unlink(); man.pop(f.stem, None)
    man_p.write_text(json.dumps(man, ensure_ascii=False, indent=1), encoding="utf-8")
    print(f"{n} generated, {len(items)} total")
asyncio.run(main())
