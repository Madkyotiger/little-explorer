# 小小探索站

家长手选的 B 站科普视频页：小动物和兽医、动物世界、细菌和病毒、恐龙和古生物、游泳、爵士舞。没有推荐算法，没有闯关、积分和徽章；孩子可以点「♡ 喜欢」，大人隔几周翻一下「❤ 我喜欢」，看她反复回去看什么。

基于 [BiliPicks](https://github.com/limin112/bilipicks)（MIT，MinLiBuilds）改写：保留 B 站官方嵌入播放器、一屏一条的播放页和 `update.py` 维护脚本，去掉了成长路线、频道榜和电视版。

## 文件

| 文件 | 作用 |
|---|---|
| `index.html` | 页面和交互 |
| `data.js` | 视频清单（单行 `const DATA = {...};`） |
| `update.py` | 原项目的维护脚本：检查失效视频、补封面时长、加视频 |
| `tools/picks.json` | 挑选清单：BV 号、分类、建议年龄、推荐理由、家长提示 |
| `tools/build_data.py` | 用核实过的 B 站信息把 `picks.json` 生成为 `data.js`；充电专属或付费视频会直接报错 |

## 加视频

```bash
python3 update.py add BV1xxxxxxxxx --cat 恐龙和古生物 --age 7 --reason "为什么推荐" [--caution "家长提示"]
python3 update.py --check   # 检查失效视频
```

`update.py add` 不检查充电专属：加之前在 B 站确认视频免费可看（很多儿童科普系列是充电专属，站外播放器放不了）。

本站不是 B 站官方产品，视频版权归各 UP 主所有。
