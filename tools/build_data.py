import json,sys
from pathlib import Path
here=Path(__file__).resolve().parent
picks=json.load(open(here/"picks.json"))
ver=json.load(open(sys.argv[1]))
cats=["小动物医生","动物世界","细菌和病毒","恐龙和古生物","游泳","爵士舞","山海经","英文动画"]
vids=[];ch={}
for bv,cat,age,reason,caution,orig in picks:
    v=ver[bv]
    assert not v["upower"] and not v["pay"], bv
    pic=v["pic"].replace("http://","https://")+"@672w_378h_1c.webp"
    d={"id":bv,"title":v["title"].strip(),"url":"https://www.bilibili.com/video/"+bv,"channel":v["owner"],"channelUrl":f"https://space.bilibili.com/{v['mid']}","category":cat,"minAge":age,"caution":caution,"reason":reason,"cover":pic,"duration":v["dur"]}
    if orig: d["orig"]=orig
    vids.append(d); ch[v["owner"]]=d["channelUrl"]
# extras.json：分P视频和番剧单集（已在生成时核过免费可看），字段直接是网页用的格式
for o in json.load(open(here/"extras.json",encoding="utf-8")):
    o=dict(o); o.pop("kt",None); vids.append(o); ch[o["channel"]]=o["channelUrl"]
import datetime
kid=json.load(open(here/"kid.json",encoding="utf-8"))
ids={v["id"] for v in vids}
for v in vids:
    v["kidTitle"]=kid["kidTitles"][v["id"]]
for pt in kid["patients"]:
    assert pt["video"] in ids, pt
assert [pl["cat"] for pl in kid["places"]]==cats
data={"site":{"curator":"爸爸","audience":"7 岁","timezone":"Asia/Shanghai"},"categories":cats,"videos":vids,"channels":ch,
      "places":kid["places"],"patients":kid["patients"],"tries":kid["tries"],"lines":kid["lines"],"built":datetime.date.today().isoformat()}
out=here.parent/"data.js"
out.write_text("// 小小探索岛数据：视频清单都在这一行里。改完运行 python3 update.py --check 检查。\n// 基于 BiliPicks（MIT，github.com/limin112/bilipicks）。DATA 必须保持在单独一行。\nconst DATA = "+json.dumps(data,ensure_ascii=False)+";\n",encoding="utf-8")
print(len(vids),"videos ->",out)
