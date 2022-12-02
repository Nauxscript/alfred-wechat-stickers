var run = (function () {
  'use strict';

  const stickers = {
    "data": [
      {
        "code": "[\u65FA\u67F4]",
        "name": "\u65FA\u67F4",
        "key": "\u65FA\u67F4",
        "keyword": "doge \u72D7"
      },
      {
        "keyword": "\u5FAE\u7B11 smile wx",
        "name": "\u5FAE\u7B11",
        "key": "\u5FAE\u7B11",
        "code": "/::)"
      },
      {
        "keyword": "\u4F24\u5FC3 sad sx",
        "name": "\u4F24\u5FC3",
        "key": "\u4F24\u5FC3",
        "code": "/::~"
      },
      {
        "keyword": "\u7F8E\u5973 beauty ml",
        "name": "\u7F8E\u5973",
        "key": "\u7F8E\u5973",
        "code": "/::B"
      },
      {
        "keyword": "\u53D1\u5446 daze \u695E fd",
        "name": "\u53D1\u5446",
        "key": "\u53D1\u5446",
        "code": "/::|"
      },
      {
        "keyword": "\u58A8\u955C \u773C\u955C yj glass",
        "name": "\u58A8\u955C",
        "key": "sunglasses",
        "code": "/:8-)"
      },
      {
        "keyword": "\u5927\u54ED cry dk",
        "name": "\u5927\u54ED",
        "key": "\u5927\u54ED",
        "code": "/::<"
      },
      {
        "keyword": "\u5BB3\u7F9E shy hx",
        "name": "\u5BB3\u7F9E",
        "key": "\u5BB3\u7F9E",
        "code": "/::$"
      },
      {
        "keyword": "\u95ED\u5634 \u54D1 bz ya",
        "name": "\u95ED\u5634",
        "key": "\u95ED\u5634",
        "code": "/::X"
      },
      {
        "keyword": "\u7761\u89C9 sleep \u665A\u5B89 night wa",
        "name": "\u7761\u89C9",
        "key": "\u7761\u89C9",
        "code": "/::Z"
      },
      {
        "keyword": "\u54ED\u6CE3 \u545C\u545C\u545C \u6D41\u6CEA",
        "name": "\u54ED\u6CE3",
        "key": "\u54ED\u6CE3",
        "code": "/::\u2019("
      },
      {
        "keyword": "\u56E7 \u65E0\u8BED \u5C34\u5C2C gg wy jiong",
        "name": "\u56E7",
        "key": "\u56E7",
        "code": "/::-|"
      },
      {
        "keyword": "\u6012",
        "name": "\u6012",
        "key": "\u6012",
        "code": "/::@"
      },
      {
        "keyword": "\u8C03\u76AE",
        "name": "\u8C03\u76AE",
        "key": "\u8C03\u76AE",
        "code": "/::P"
      },
      {
        "keyword": "\u5472\u7259\u7B11 cyx \u7B11",
        "name": "\u5472\u7259\u7B11",
        "key": "\u5472\u7259\u7B11",
        "code": "/::D"
      },
      {
        "keyword": "\u60CA\u8BB6 jy surprised",
        "name": "\u60CA\u8BB6",
        "key": "\u60CA\u8BB6",
        "code": "/::O"
      },
      {
        "keyword": "\u96BE\u8FC7 ng sad",
        "name": "\u96BE\u8FC7",
        "key": "\u96BE\u8FC7",
        "code": "/::("
      },
      {
        "keyword": "\u9177 cool ku",
        "name": "\u9177",
        "key": "\u9177",
        "code": "/::+"
      },
      {
        "keyword": "\u6C57",
        "name": "\u6C57",
        "key": "\u6C57",
        "code": "/:\u2013b"
      },
      {
        "keyword": "\u6293\u72C2",
        "name": "\u6293\u72C2",
        "key": "\u6293\u72C2",
        "code": "/::Q"
      },
      {
        "keyword": "\u5410",
        "name": "\u5410",
        "key": "\u5410",
        "code": "/::T"
      },
      {
        "keyword": "\u6342\u5634\u7B11 wzx",
        "name": "\u6342\u5634\u7B11",
        "key": "\u6342\u5634\u7B11",
        "code": "/:,@P"
      },
      {
        "keyword": "\u5FEB\u4E50",
        "name": "\u5FEB\u4E50",
        "key": "\u5FEB\u4E50",
        "code": "/:,@-D"
      },
      {
        "keyword": "\u5947",
        "name": "\u5947",
        "key": "\u5947",
        "code": "/::d"
      },
      {
        "keyword": "\u50B2",
        "name": "\u50B2",
        "key": "\u50B2",
        "code": "/:,@o"
      },
      {
        "keyword": "\u997F",
        "name": "\u997F",
        "key": "\u997F",
        "code": "/::g"
      },
      {
        "keyword": "\u7D2F",
        "name": "\u7D2F",
        "key": "\u7D2F",
        "code": "/:|-)"
      },
      {
        "keyword": "\u5413",
        "name": "\u5413",
        "key": "\u5413",
        "code": "/::!"
      },
      {
        "keyword": "\u6C57",
        "name": "\u6C57",
        "key": "\u6C57",
        "code": "/::L"
      },
      {
        "keyword": "\u9AD8\u5174",
        "name": "\u9AD8\u5174",
        "key": "\u9AD8\u5174",
        "code": "/::>"
      },
      {
        "keyword": "\u95F2",
        "name": "\u95F2",
        "key": "\u95F2",
        "code": "/::,@"
      },
      {
        "keyword": "\u52AA\u529B",
        "name": "\u52AA\u529B",
        "key": "\u52AA\u529B",
        "code": "/:,@f"
      },
      {
        "keyword": "\u9A82",
        "name": "\u9A82",
        "key": "\u9A82",
        "code": "/::-S"
      },
      {
        "keyword": "\u7591\u95EE",
        "name": "\u7591\u95EE",
        "key": "\u7591\u95EE",
        "code": "/:?"
      },
      {
        "keyword": "\u79D8\u5BC6",
        "name": "\u79D8\u5BC6",
        "key": "\u79D8\u5BC6",
        "code": "/:,@x"
      },
      {
        "keyword": "\u4E71",
        "name": "\u4E71",
        "key": "\u4E71",
        "code": "/:,@@"
      },
      {
        "keyword": "\u75AF",
        "name": "\u75AF",
        "key": "\u75AF",
        "code": "/::8"
      },
      {
        "keyword": "\u54C0",
        "name": "\u54C0",
        "key": "\u54C0",
        "code": "/:,@!"
      },
      {
        "keyword": "\u9B3C",
        "name": "\u9B3C",
        "key": "\u9B3C",
        "code": "/:!!!"
      },
      {
        "keyword": "\u6253\u51FB",
        "name": "\u6253\u51FB",
        "key": "\u6253\u51FB",
        "code": "/:xx"
      },
      {
        "keyword": "bye",
        "name": "bye",
        "key": "bye",
        "code": "/:bye"
      },
      {
        "keyword": "\u6C57",
        "name": "\u6C57",
        "key": "\u6C57",
        "code": "/:wipe"
      },
      {
        "keyword": "\u62A0",
        "name": "\u62A0",
        "key": "\u62A0",
        "code": "/:dig"
      },
      {
        "keyword": "\u9F13\u638C",
        "name": "\u9F13\u638C",
        "key": "\u9F13\u638C",
        "code": "/:handclap"
      },
      {
        "keyword": "\u7CDF\u7CD5",
        "name": "\u7CDF\u7CD5",
        "key": "\u7CDF\u7CD5",
        "code": "/:&-("
      },
      {
        "keyword": "\u6076\u641E",
        "name": "\u6076\u641E",
        "key": "\u6076\u641E",
        "code": "/:B-)"
      },
      {
        "keyword": "\u4EC0\u4E48",
        "name": "\u4EC0\u4E48",
        "key": "\u4EC0\u4E48",
        "code": "/:<@"
      },
      {
        "keyword": "\u4EC0\u4E48",
        "name": "\u4EC0\u4E48",
        "key": "\u4EC0\u4E48",
        "code": "/:@>"
      },
      {
        "keyword": "\u7D2F",
        "name": "\u7D2F",
        "key": "\u7D2F",
        "code": "/::-O"
      },
      {
        "keyword": "\u770B",
        "name": "\u770B",
        "key": "\u770B",
        "code": "/:>-|"
      },
      {
        "keyword": "\u96BE\u8FC7",
        "name": "\u96BE\u8FC7",
        "key": "\u96BE\u8FC7",
        "code": "/:P-("
      },
      {
        "keyword": "\u96BE\u8FC7",
        "name": "\u96BE\u8FC7",
        "key": "\u96BE\u8FC7",
        "code": "/::\u2019|"
      },
      {
        "keyword": "\u574F",
        "name": "\u574F",
        "key": "\u574F",
        "code": "/:X-)"
      },
      {
        "keyword": "\u4EB2",
        "name": "\u4EB2",
        "key": "\u4EB2",
        "code": "/::*"
      },
      {
        "keyword": "\u5413",
        "name": "\u5413",
        "key": "\u5413",
        "code": "/:@x"
      },
      {
        "keyword": "\u53EF\u601C",
        "name": "\u53EF\u601C",
        "key": "\u53EF\u601C",
        "code": "/:8*"
      },
      {
        "keyword": "\u5200",
        "name": "\u5200",
        "key": "\u5200",
        "code": "/:pd"
      },
      {
        "keyword": "\u6C34\u679C",
        "name": "\u6C34\u679C",
        "key": "\u6C34\u679C",
        "code": "/:<W>"
      },
      {
        "keyword": "\u9152",
        "name": "\u9152",
        "key": "\u9152",
        "code": "/:beer"
      },
      {
        "keyword": "\u7BEE\u7403",
        "name": "\u7BEE\u7403",
        "key": "\u7BEE\u7403",
        "code": "/:basketb"
      },
      {
        "keyword": "\u4E52\u4E53",
        "name": "\u4E52\u4E53",
        "key": "\u4E52\u4E53",
        "code": "/:oo"
      },
      {
        "keyword": "\u5496\u5561",
        "name": "\u5496\u5561",
        "key": "\u5496\u5561",
        "code": "/:coffee"
      },
      {
        "keyword": "\u7F8E\u98DF",
        "name": "\u7F8E\u98DF",
        "key": "\u7F8E\u98DF",
        "code": "/:eat"
      },
      {
        "keyword": "\u52A8\u7269",
        "name": "\u52A8\u7269",
        "key": "\u52A8\u7269",
        "code": "/:pig"
      },
      {
        "keyword": "\u9C9C\u82B1",
        "name": "\u9C9C\u82B1",
        "key": "\u9C9C\u82B1",
        "code": "/:rose"
      },
      {
        "keyword": "\u67AF",
        "name": "\u67AF",
        "key": "\u67AF",
        "code": "/:fade"
      },
      {
        "keyword": "\u5507",
        "name": "\u5507",
        "key": "\u5507",
        "code": "/:showlove"
      },
      {
        "keyword": "\u7231",
        "name": "\u7231",
        "key": "\u7231",
        "code": "/:heart"
      },
      {
        "keyword": "\u5206\u624B",
        "name": "\u5206\u624B",
        "key": "\u5206\u624B",
        "code": "/:break"
      },
      {
        "keyword": "\u751F\u65E5",
        "name": "\u751F\u65E5",
        "key": "\u751F\u65E5",
        "code": "/:cake"
      },
      {
        "keyword": "\u7535",
        "name": "\u7535",
        "key": "\u7535",
        "code": "/:li"
      }
    ]
  };

  const iconPath = "./icons";
  const data = JSON.parse(JSON.stringify(stickers)).data;
  const parseData = (stickers) => {
    return stickers.map((element) => ({
      title: element.name,
      subtitle: element.keyword,
      arg: element.code,
      icon: {
        path: element.key ? `${iconPath}/${element.key}.png` : `${iconPath}/default.png`
      },
      mods: {
        ctrl: {
          arg: element.code,
          subtitle: "Copy and paste"
        }
      }
    }));
  };
  const searchFn = (query) => {
    if (!query) {
      return parseData(data);
    }
    const matches = data.filter((element) => element.keyword.includes(query));
    return parseData(matches);
  };
  function run(argv) {
    const query = argv[0];
    const items = searchFn(query);
    console.log(JSON.stringify({ items }, null, "	"));
  }

  return run;

})();
