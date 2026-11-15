# 小小探索岛

家长手选的儿童科普视频小岛（B 站官方嵌入播放器）。岛上 6 个地方：动物医院、动物园、微观世界、恐龙谷、游泳湾、舞台。没有推荐算法，没有积分、打卡和上锁；游戏感来自世界和角色：

- **小探险家**（扎马尾的小女孩）当向导；岛上的字都能点 🔊 听。
- **今天的小病人**：每天一只小动物来敲门问一个问题，视频就是答案；看完可以录一句话回给它。
- **我想试试**：每个地方几张线下小卡，做到了拍照放进探索本。不做没关系，不能拿来换看视频。
- **探索本**（宝箱）：照片、录音、“我想知道”的问题、喜欢的视频。全部只存在这台设备的浏览器里（照片和录音在 IndexedDB），不上传。
- 看完回到地点自己再挑，不做上滑连播。

在线：https://madkyotiger.github.io/little-explorer/

## 文件

| 文件 | 作用 |
|---|---|
| `index.html` | 整个网页（无构建、无依赖） |
| `data.js` | 生成的数据：视频、地点、小病人、线下小卡、语音台词（单行 `const DATA = {...};`） |
| `tools/picks.json` | 视频清单：BV 号、分类、建议年龄、给大人的推荐理由、家长提示、原作者 |
| `tools/kid.json` | 孩子看到的内容：地点坐标和欢迎语、每条视频的儿童标题、小病人、线下小卡、向导台词 |
| `tools/build_data.py` | `picks.json` + `kid.json` + B 站核实信息 → `data.js`；充电专属或付费视频会直接报错 |
| `tools/make_audio.py` | 把孩子要听的文字生成语音到 `audio/`（edge-tts，小艺声音；文字没变的跳过） |
| `assets/` | 岛图、各地点横幅、向导、宝箱（AI 生成） |
| `update.py` | 原 BiliPicks 维护脚本：检查失效视频 |
| `docs/` | 界面方向图和 Fable 5.2 的意见 |

## 加视频 / 加小病人

1. 在 B 站核实视频免费可看（不是充电专属），把 BV 信息加进核实文件。
2. 改 `tools/picks.json`（加一行）和 `tools/kid.json`（`kidTitles` 加儿童标题；想做小病人就在 `patients` 加一条）。
3. `python3 tools/build_data.py <verified.json>` → `python3 tools/make_audio.py` → 本地打开检查 → 提交推送。

`python3 update.py --check` 可以检查有没有视频失效。

视频清单的维护方式来自开源项目 [BiliPicks](https://github.com/limin112/bilipicks)（MIT，MinLiBuilds）。本站不是 B 站官方产品，视频版权归各 UP 主所有。
