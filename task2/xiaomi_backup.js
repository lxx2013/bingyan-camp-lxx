var app_header = new Vue({
  "el": "#header",
  "data": {
    "left_lis": [{
      "text": "小米商城",
      "href": "https://www.mi.com/index.html"
    }, {
      "text": "MIUI",
      "href": "https://www.miui.com/"
    }, {
      "text": "IoT",
      "href": "https://iot.mi.com/index.html"
    }, {
      "text": "云服务",
      "href": "https://i.mi.com/"
    }, {
      "text": "小爱开放平台",
      "href": "https://shuidi.mi.com/"
    }, {
      "text": "金融",
      "href": "https://jr.mi.com/?from=micom"
    }, {
      "text": "有品",
      "href": "https://youpin.mi.com/"
    }, {
      "text": "政企服务",
      "href": "https://b.mi.com/?client_id=180100031058&masid=17409.0358"
    }, {
      "text": "Select Region",
      "href": "https://www.mi.com/#J_modal-globalSites"
    }],
    "right_lis": [{
      "text": "登录",
      "href": "https://order.mi.com/site/login?redirectUrl=https://www.mi.com/"
    }, {
      "text": "注册",
      "href": "https://account.xiaomi.com/pass/register"
    }, {
      "text": "消息通知",
      "href": "https://order.mi.com/message/list"
    }]
  }
});
var app_main = new Vue({
  "el": "#main",
  "data": {
    "input_lis": [{
      "text": "小米6X",
      "href": "https://item.mi.com/product/10000091.html"
    }, {
      "text": "红米Note 5",
      "href": "https://item.mi.com/product/10000084.html"
    }],
    "left_lis": [{
      "text": "手机 电话卡",
      "href": "https://www.mi.com/p/1915.html",
      "children_list": [
        [{
          "text": "小米MIX 2S",
          "href": "https://www.mi.com/mix2s/",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/mix2s80-80white.png?width=80&height=80"
        }, {
          "text": "小米6X",
          "href": "https://www.mi.com/mi6x/",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/80808080808080.jpg?width=80&height=80"
        }, {
          "text": "黑鲨游戏手机",
          "href": "https://www.mi.com/blackshark/",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/heisha-80.png?width=80&height=80"
        }, {
          "text": "小米Note 3",
          "href": "https://www.mi.com/minote3/",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/note3-80-2.png?width=80&height=80"
        }, {
          "text": "小米MIX 2",
          "href": "https://www.mi.com/mix2/",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/mix2-80.png?width=80&height=80"
        }, {
          "text": "小米6",
          "href": "https://www.mi.com/mi6/",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/xm6_80.png?width=80&height=80"
        }],
        [{
          "text": "小米5X",
          "href": "https://www.mi.com/mi5x/",
          "img": "https://i1.mifile.cn/f/i/g/2015/80pc-5x.png?width=80&height=80"
        }, {
          "text": "小米Max 2",
          "href": "https://www.mi.com/max2/",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/max2_80.jpg?width=80&height=80"
        }, {
          "text": "红米Note 5",
          "href": "https://www.mi.com/redminote5/",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/note5-80-80.png?width=80&height=80"
        }, {
          "text": "红米S2",
          "href": "https://www.mi.com/redmis2/",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/s2-80-80.png?width=80&height=80"
        }, {
          "text": "红米5 Plus",
          "href": "https://www.mi.com/redmi5/",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/redmi5P-80-80.png?width=80&height=80"
        }, {
          "text": "红米5",
          "href": "https://www.mi.com/redmi5/",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/redmi5-80-80.png?width=80&height=80"
        }],
        [{
          "text": "红米5A",
          "href": "https://www.mi.com/redmi5a/",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/80-5a.png?width=80&height=80"
        }, {
          "text": "移动4G+专区",
          "href": "https://www.mi.com/p/5592.html",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/80.jpg?width=80&height=80"
        }, {
          "text": "对比手机",
          "href": "https://www.mi.com/compare/",
          "img": "https://i1.mifile.cn/f/i/15/goods/sidebar/compare.jpg?width=80&height=80"
        }, {
          "text": "米粉卡 日租卡",
          "href": "https://www.mi.com/micard",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/mifenka-1.jpg?width=80&height=80"
        }, {
          "text": "小米移动 电话卡",
          "href": "https://www.mi.com/mimobile/",
          "img": "https://i1.mifile.cn/f/i/15/goods/sidebar/mimobile.jpg?width=80&height=80"
        }, {
          "text": "手机上门维修",
          "href": "https://item.mi.com/1175100004.html",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/weixiu80-80.png?width=80&height=80"
        }]
      ]
    }, {
      "text": "电视 盒子",
      "href": "https://www.mi.com/p/1995.html",
      "children_list": [
        [{
          "text": "小米电视4A 32英寸",
          "href": "https://www.mi.com/mitv4A/32/",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/zuodaohang.jpg?width=80&height=80"
        }, {
          "text": "小米电视4A 40英寸",
          "href": "https://www.mi.com/mitv4A/40/",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/4a4080.80.jpg?width=80&height=80"
        }, {
          "text": "小米电视4A 43英寸",
          "href": "https://www.mi.com/mitv4A/43/?cfrom=search",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/4A43.jpg?width=80&height=80"
        }, {
          "text": "小米电视4A 43英寸青春版",
          "href": "https://www.mi.com/mitv4A/43y",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/43qingchunban80_80.jpg?width=80&height=80"
        }, {
          "text": "小米电视4A 49英寸",
          "href": "https://www.mi.com/mitv4A/49/",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/xp80_49.jpg?width=80&height=80"
        }, {
          "text": "小米电视4A 50英寸",
          "href": "https://www.mi.com/mitv4A/50",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/4A5080.jpg?width=80&height=80"
        }],
        [{
          "text": "小米电视4A 55英寸",
          "href": "https://www.mi.com/mitv4A/55/",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/xp80_55.jpg?width=80&height=80"
        }, {
          "text": "小米电视4A 65英寸",
          "href": "https://www.mi.com/mitv4A/65/",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/xp80_65.jpg?width=80&height=80"
        }, {
          "text": "小米电视4C 43英寸",
          "href": "https://www.mi.com/mitv4c/43/",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/xin55.png?width=80&height=80"
        }, {
          "text": "小米电视4C 50英寸",
          "href": "https://www.mi.com/mitv4c/50/",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/4C5080.80.jpg?width=80&height=80"
        }, {
          "text": "小米电视4C 55英寸",
          "href": "https://www.mi.com/mitv4c/55/",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/xin43.png?width=80&height=80"
        }, {
          "text": "小米电视4A 32英寸体育版",
          "href": "https://www.mi.com/mitv4A/32p/",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/80_8032tv.jpg?width=80&height=80"
        }],
        [{
          "text": "小米电视4A 43英寸体育版",
          "href": "https://www.mi.com/mitv4A/43p",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/tiyu4380_80.jpg?width=80&height=80"
        }, {
          "text": "小米电视4C 55英寸体育版 ",
          "href": "https://www.mi.com/mitv4c/55p/",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/80_8055tv.jpg?width=80&height=80"
        }, {
          "text": "小米电视4 49英寸",
          "href": "https://www.mi.com/mitv4/49/",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/80xmds_49.jpg?width=80&height=80"
        }, {
          "text": "小米电视4 55英寸",
          "href": "https://www.mi.com/mitv4/55/",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/80xmds_55.jpg?width=80&height=80"
        }, {
          "text": "小米电视4 65英寸",
          "href": "https://www.mi.com/mitv4/65/",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/80xmds_65.jpg?width=80&height=80"
        }, {
          "text": "小米电视4S 55英寸",
          "href": "https://www.mi.com/mitv4s/55/",
          "img": "https://i1.mifile.cn/f/i/g/2015/4S55-80-80.png?width=80&height=80"
        }],
        [{
          "text": "小米电视4S 50英寸",
          "href": "https://www.mi.com/mitv4s/50/",
          "img": "https://i1.mifile.cn/f/i/g/2015/80_80.jpg?width=80&height=80"
        }, {
          "text": "小米电视4S 32英寸",
          "href": "https://www.mi.com/mitv4s/32/",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/324S80.80.jpg?width=80&height=80"
        }, {
          "text": "小米盒子4",
          "href": "https://www.mi.com/mibox4/",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/hezibai480_80.jpg?width=80&height=80"
        }, {
          "text": "小米盒子4c",
          "href": "https://www.mi.com/mibox4c/",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/heihezi4c80_80.jpg?width=80&height=80"
        }, {
          "text": "小米盒子3 增强版",
          "href": "https://www.mi.com/hezi3s/",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/hezi3zenqiang.jpg?width=80&height=80"
        }, {
          "text": "小米盒子3c",
          "href": "https://www.mi.com/mibox3c/",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/hezi80-80.jpg?width=80&height=80"
        }]
      ]
    }, {
      "text": "笔记本",
      "href": "https://www.mi.com/p/2074.html",
      "children_list": [
        [{
          "text": "小米游戏本 15.6\"",
          "href": "https://www.mi.com/migaminglaptop/",
          "img": "https://i1.mifile.cn/f/i/g/2015/80x80youxichuantu.png?width=80&height=80"
        }, {
          "text": "笔记本Air 12.5\"",
          "href": "https://www.mi.com/mibookair-12/",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/bijiben80.jpg?width=80&height=80"
        }, {
          "text": "笔记本Air 13.3\" 独显",
          "href": "https://www.mi.com/mibookair/",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/bijiben80.jpg?width=80&height=80"
        }, {
          "text": "笔记本Air 13.3\" 集显",
          "href": "https://www.mi.com/mibookair-13in/",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/bijiben80.jpg?width=80&height=80"
        }, {
          "text": "笔记本Air 13.3\" 四核增强",
          "href": "https://www.mi.com/mibookair-13/",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/80x80.png?width=80&height=80"
        }, {
          "text": "笔记本Pro 15.6\"",
          "href": "https://www.mi.com/mibookpro/",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/WechatIMG605.png?width=80&height=80"
        }],
        [{
          "text": "USB-C电源适配器",
          "href": "https://item.mi.com/1170700024.html",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/bjbcdq80.jpg?width=80&height=80"
        }, {
          "text": "HDMI转接器",
          "href": "https://item.mi.com/1163000011.html",
          "img": "https://i1.mifile.cn/f/i/15/goods/sidebar/usbzjqggg80.jpg?width=80&height=80"
        }, {
          "text": "VGA 千兆网口转接器",
          "href": "https://item.mi.com/1173700004.html?cfrom=search",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/vga.png?width=80&height=80"
        }, {
          "text": "小米笔记本内胆包",
          "href": "https://list.mi.com/accessories/tag?id=neidanbao",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/neidanbao80.jpg?width=80&height=80"
        }, {
          "text": "悦米机械键盘",
          "href": "https://www.mi.com/keyboard/",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/ymjp80.jpg?width=80&height=80"
        }, {
          "text": "悦米机械键盘Pro静音版",
          "href": "https://item.mi.com/1181300020.html",
          "img": "https://i1.mifile.cn/f/i/g/2015/jianpanbashi.jpg?width=80&height=80"
        }],
        [{
          "text": "小米便携鼠标",
          "href": "https://www.mi.com/mouse/",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/shubiao80.jpg?width=80&height=80"
        }, {
          "text": "小米无线鼠标",
          "href": "https://www.mi.com/mouse-2/",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/wxsb80.png?width=80&height=80"
        }, {
          "text": "鼠标垫",
          "href": "https://list.mi.com/59",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/xmsbd80.jpg?width=80&height=80"
        }, {
          "text": "DisplayPort转接器",
          "href": "https://www.mi.com/commutator-dp/",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/USBC80.jpg?width=80&height=80"
        }, {
          "text": "USB至千兆网口转接器",
          "href": "https://item.mi.com/1173700032.html",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/6838xiaozhuanjieqi.png?width=80&height=80"
        }]
      ]
    }, {
      "text": "智能 家电",
      "href": "https://www.mi.com/p/3469.html?client_id=180100041086&masid=17409.0245",
      "children_list": [
        [{
          "text": "空气净化器2",
          "href": "https://www.mi.com/air2/",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/jinghuaqi2-80.jpg?width=80&height=80"
        }, {
          "text": "空气净化器Pro",
          "href": "https://www.mi.com/airpro/",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/jinghuaqiPro-80.jpg?width=80&height=80"
        }, {
          "text": "净化器2S",
          "href": "https://www.mi.com/air2s/",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/jinghuaqi2S-80.jpg?width=80&height=80"
        }, {
          "text": "净化器MAX",
          "href": "https://www.mi.com/airmax/",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/jinghuaqiMAX-80.jpg?width=80&height=80"
        }, {
          "text": "车载空气净化器",
          "href": "https://www.mi.com/carair/",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/czjhq80.jpg?width=80&height=80"
        }, {
          "text": "空净滤芯",
          "href": "https://list.mi.com/accessories/tag?id=jinghuaqilvxin",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/kongjinlvxin-80.jpg?width=80&height=80"
        }],
        [{
          "text": "净水器(厨下式)",
          "href": "https://www.mi.com/water2/",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/jingshuicxs-80.jpg?width=80&height=80"
        }, {
          "text": "净水器滤芯",
          "href": "https://list.mi.com/accessories/tag?id=water",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/jingshuiqiandlvxin-80.jpg?width=80&height=80"
        }, {
          "text": "米家恒温电水壶",
          "href": "https://www.mi.com/kettle/",
          "img": "https://i1.mifile.cn/f/i/g/2015/video/shuihu80.jpg?width=80&height=80"
        }, {
          "text": "米家电水壶",
          "href": "https://www.mi.com/electric-kettle/",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/dianshuihu-80.jpg?width=80&height=80"
        }, {
          "text": "PM2.5检测仪",
          "href": "https://www.mi.com/pmdetec/",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/jianceyi-80.jpg?width=80&height=80"
        }, {
          "text": "水质TDS检测笔",
          "href": "https://item.mi.com/1152800035.html",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/jiancebi-80.jpg?width=80&height=80"
        }],
        [{
          "text": "扫地机器人",
          "href": "https://www.mi.com/roomrobot/",
          "img": "https://i1.mifile.cn/f/i/g/doodle/jiqiren.jpg?width=80&height=80"
        }, {
          "text": "扫地机附件",
          "href": "https://list.mi.com/174",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/saodipeijian-80.jpg?width=80&height=80"
        }, {
          "text": "米家电饭煲",
          "href": "https://search.mi.com/search_%E7%B1%B3%E5%AE%B6%E7%94%B5%E9%A5%AD%E7%85%B2",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/yalidianfanbao-80.jpg?width=80&height=80"
        }, {
          "text": "米家电磁炉",
          "href": "https://search.mi.com/search_%E7%B1%B3%E5%AE%B6%E7%94%B5%E7%A3%81%E7%82%89",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/diancilu-80.jpg?width=80&height=80"
        }, {
          "text": "知吾煮厨具",
          "href": "https://search.mi.com/search_%E7%9F%A5%E5%90%BE%E7%85%AE-0-0-0-0-1-0-0-0-1",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/tangguo-80.jpg?width=80&height=80"
        }, {
          "text": "激光投影电视",
          "href": "https://www.mi.com/laser-projection/",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/touyingdianshi-80.jpg?width=80&height=80"
        }],
        [{
          "text": "小米净水器 1A （厨下式）",
          "href": "https://www.mi.com/water1a/?cfrom=search",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/jingshuiqi80haha.jpg?width=80&height=80"
        }, {
          "text": "剃须刀",
          "href": "https://search.mi.com/search_%E5%89%83%E9%A1%BB%E5%88%80",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/tixvdao80.jpg?width=80&height=80"
        }, {
          "text": "小米净水器滤芯",
          "href": "https://search.mi.com/search_%E5%B0%8F%E7%B1%B3%E5%87%80%E6%B0%B4%E5%99%A8%E6%BB%A4%E8%8A%AF",
          "img": "https://i1.mifile.cn/f/i/g/2015/lvxinbashi.png?width=80&height=80"
        }]
      ]
    }, {
      "text": "健康 家居",
      "href": "https://www.mi.com/p/3507.html?client_id=180100041086&masid=17409.0240",
      "children_list": [
        [{
          "text": "手环",
          "href": "https://search.mi.com/search_%E6%89%8B%E7%8E%AF",
          "img": "https://i1.mifile.cn/f/i/g/2015/shouhuan.jpg?width=80&height=80"
        }, {
          "text": "手表",
          "href": "https://search.mi.com/search_%E6%89%8B%E8%A1%A8",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/yundongshoubiao-80.jpg?width=80&height=80"
        }, {
          "text": "小米体脂秤",
          "href": "https://www.mi.com/scale2/",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/tizhicheng-80.jpg?width=80&height=80"
        }, {
          "text": "小米体重秤",
          "href": "https://www.mi.com/scale/",
          "img": "https://i1.mifile.cn/f/i/15/goods/list/scale.jpg?width=80&height=80"
        }, {
          "text": "米家电动牙刷",
          "href": "https://www.mi.com/electric-toothbrush/",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/yashua80.jpg?width=80&height=80"
        }, {
          "text": "智能家庭组合",
          "href": "https://www.mi.com/special/smart/",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/zhinengjiatingtaozhuang-80.jpg?width=80&height=80"
        }],
        [{
          "text": "米家智能插座",
          "href": "https://search.mi.com/search_%E7%B1%B3%E5%AE%B6%E6%99%BA%E8%83%BD%E6%8F%92%E5%BA%A7",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/zhinengchazuo-80.jpg?width=80&height=80"
        }, {
          "text": "手电筒",
          "href": "https://www.mi.com/flashlight/",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/flashlight-80.jpg?width=80&height=80"
        }, {
          "text": "米家LED智能台灯",
          "href": "https://www.mi.com/mjsmartlamp/",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/LEDtaideng-80.jpg?width=80&height=80"
        }, {
          "text": "米家飞利浦台灯",
          "href": "https://www.mi.com/desklamp2",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/flptaideng-80.jpg?width=80&height=80"
        }, {
          "text": "米家感应夜灯",
          "href": "https://www.mi.com/nightlight/",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/nightlight-80.jpg?width=80&height=80"
        }, {
          "text": "床头灯",
          "href": "https://www.mi.com/mj-bedsidelamp/",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/mj-bedsidelamp-80.jpg?width=80&height=80"
        }],
        [{
          "text": "吸顶灯",
          "href": "https://search.mi.com/search_%E5%90%B8%E9%A1%B6%E7%81%AF-147",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/xidingdeng-80.jpg?width=80&height=80"
        }, {
          "text": "智能灯泡",
          "href": "https://search.mi.com/search_%E6%99%BA%E8%83%BD%E7%81%AF%E6%B3%A1",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/colorfullamp-80.jpg?width=80&height=80"
        }, {
          "text": "米家小白智能摄像机",
          "href": "https://www.mi.com/micamera/",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/micamera-80.jpg?width=80&height=80"
        }, {
          "text": "米家智能摄像机云台版",
          "href": "https://www.mi.com/camera-head/",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/camera-head-80.jpg?width=80&height=80"
        }, {
          "text": "小方智能摄像机",
          "href": "https://www.mi.com/xiaofang/",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/xiaofang-80.jpg?width=80&height=80"
        }, {
          "text": "大方智能摄像机",
          "href": "https://www.mi.com/dafang/",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/dafang-80.jpg?width=80&height=80"
        }],
        [{
          "text": "米家智能摄像机1080P",
          "href": "https://www.mi.com/mj-camera-1080p/",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/mj-camera-1080p80.jpg?width=80&height=80"
        }, {
          "text": "小白智能摄像机大众版",
          "href": "https://www.mi.com/smartcamera-v/",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/smartcamera-v80.jpg?width=80&height=80"
        }, {
          "text": "米家蓝牙温湿度计",
          "href": "https://www.mi.com/mj-humiture/?cfrom=search",
          "img": "https://i1.mifile.cn/f/i/g/2015/fyhnhn.jpg?width=80&height=80"
        }]
      ]
    }, {
      "text": "出行 儿童",
      "href": "https://www.mi.com/p/3468.html?client_id=180100041086&masid=17409.0246",
      "children_list": [
        [{
          "text": "九号平衡车",
          "href": "https://www.mi.com/scooter/",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/scooter-80.jpg?width=80&height=80"
        }, {
          "text": "九号平衡车Plus",
          "href": "https://www.mi.com/scooterplus/",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/phcplus80.jpg?width=80&height=80"
        }, {
          "text": "米家电动滑板车",
          "href": "https://www.mi.com/scooter2/",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/scooter2-80.jpg?width=80&height=80"
        }, {
          "text": "电助力折叠自行车",
          "href": "https://www.mi.com/mibicycle/",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/zxc80-80.jpg?width=80&height=80"
        }, {
          "text": "行车记录仪",
          "href": "https://www.mi.com/mj-carcorder/",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/jly80.jpg?width=80&height=80"
        }, {
          "text": "70迈智能后视镜",
          "href": "https://www.mi.com/mirror/",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/mirror-80.jpg?width=80&height=80"
        }],
        [{
          "text": "米兔遥控小飞机",
          "href": "https://item.mi.com/product/7851.html",
          "img": "https://i1.mifile.cn/f/i/g/2015/XIAOFEIJIBASHI.jpg?width=80&height=80"
        }, {
          "text": "米兔儿童手表2",
          "href": "https://www.mi.com/mtwatch-2/",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/shoubiao280.jpg?width=80&height=80"
        }, {
          "text": "米兔智能积木",
          "href": "https://www.mi.com/toyblock2/",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/toyblock2-80.jpg?width=80&height=80"
        }, {
          "text": "米兔故事机",
          "href": "https://www.mi.com/mitu/",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/mitugushi-80.jpg?width=80&height=80"
        }, {
          "text": "积木机器人",
          "href": "https://www.mi.com/toyblock/",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/toyblock-80.jpg?width=80&height=80"
        }, {
          "text": "米兔定位电话",
          "href": "https://www.mi.com/locatephone/",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/locatephone-80.jpg?width=80&height=80"
        }],
        [{
          "text": "米兔轨道积木",
          "href": "https://search.mi.com/search_%E5%84%BF%E7%AB%A5",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/jimumumu.jpg?width=80&height=80"
        }, {
          "text": "小米无人机",
          "href": "https://list.mi.com/155",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/wurenji80.jpg?width=80&height=80"
        }, {
          "text": "米家对讲机",
          "href": "https://www.mi.com/mj-interphone/",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/djj80.jpg?width=80&height=80"
        }, {
          "text": "米家小相机",
          "href": "https://www.mi.com/camera-small/",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/camera-small-80.jpg?width=80&height=80"
        }, {
          "text": "米家全景相机",
          "href": "https://www.mi.com/mj-panorama-camera/",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/mj-panorama-camera-80.jpg?width=80&height=80"
        }, {
          "text": "小蚁微单相机",
          "href": "https://www.mi.com/yi-camera-m1",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/yi-camera-m1-80.jpg?width=80&height=80"
        }],
        [{
          "text": "小米米家智能后视镜",
          "href": "https://www.mi.com/mj-mirror/?cfrom=search",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/houshijing80.jpg?width=80&height=80"
        }, {
          "text": "小米小爱音箱mini",
          "href": "https://www.mi.com/aispeaker-mini/?cfrom=search",
          "img": "https://i1.mifile.cn/f/i/g/2015/bashixiaoaimini.jpg?width=80&height=80"
        }]
      ]
    }, {
      "text": "路由器 手机配件",
      "href": "https://www.mi.com/p/3483.html?client_id=180100041086&masid=17409.0243",
      "children_list": [
        [{
          "text": "小米路由器3",
          "href": "https://www.mi.com/miwifi3/",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/miwifi3-80.jpg?width=80&height=80"
        }, {
          "text": "小米路由器3C",
          "href": "https://www.mi.com/miwifi3c/",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/miwifi3c-80.jpg?width=80&height=80"
        }, {
          "text": "小米路由器3G",
          "href": "https://www.mi.com/miwifi3g/",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/miwifi3g-80.jpg?width=80&height=80"
        }, {
          "text": "小米路由器3A",
          "href": "https://www.mi.com/miwifi3a/",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/miwifi3a-80.jpg?width=80&height=80"
        }, {
          "text": "小米路由器Pro",
          "href": "https://www.mi.com/miwifihd/",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/luyouqiPro-80.jpg?width=80&height=80"
        }, {
          "text": "小米路由器HD",
          "href": "https://www.mi.com/miwifihd/",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/luyouqiHD-80.jpg?width=80&height=80"
        }],
        [{
          "text": "WiFi放大器2",
          "href": "https://item.mi.com/1164700010.html",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/WiFifangdaqi2-80.jpg?width=80&height=80"
        }, {
          "text": "WiFi放大器Pro",
          "href": "https://item.mi.com/1172800043.html",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/WiFifangdaqiPro-80.jpg?width=80&height=80"
        }, {
          "text": "WiFi电力猫",
          "href": "https://search.mi.com/search_WiFi%E7%94%B5%E5%8A%9B%E7%8C%AB",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/plc-80.jpg?width=80&height=80"
        }, {
          "text": "小米VR眼镜",
          "href": "https://www.mi.com/mivr/",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/VRPLAY2.png?width=80&height=80"
        }, {
          "text": "随身WIFI",
          "href": "https://www.mi.com/miniwifi/",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/miniwifi-80.jpg?width=80&height=80"
        }, {
          "text": "千兆网线",
          "href": "https://search.mi.com/search_%E5%8D%83%E5%85%86%E7%BD%91%E7%BA%BF",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/qianzhaowangxian-80.jpg?width=80&height=80"
        }],
        [{
          "text": "手机保护套",
          "href": "https://list.mi.com/8",
          "img": "https://i1.mifile.cn/f/i/15/goods/sidebar/baohu.jpg?width=80&height=80"
        }, {
          "text": "手机贴膜",
          "href": "https://list.mi.com/9",
          "img": "https://i1.mifile.cn/f/i/15/goods/sidebar/tiemo.jpg?width=80&height=80"
        }, {
          "text": "自拍杆",
          "href": "https://search.mi.com/search_%E8%87%AA%E6%8B%8D%E6%9D%86",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/zipaigan80.jpg?width=80&height=80"
        }, {
          "text": "数据线",
          "href": "https://list.mi.com/16",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/shujuxian-80.jpg?width=80&height=80"
        }, {
          "text": "存储卡",
          "href": "https://list.mi.com/27",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/cunchu80x80.jpg?width=80&height=80"
        }]
      ]
    }, {
      "text": "移动电源 插线板",
      "href": "https://www.mi.com/p/3496.html?client_id=180100041086&masid=17409.0241",
      "children_list": [
        [{
          "text": "新小米移动电源2",
          "href": "https://item.mi.com/1180200004.html?cfrom=search",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/dianyuan2.100080.jpg?width=80&height=80"
        }, {
          "text": "小米移动电源2C",
          "href": "https://www.mi.com/battery2c/?cfrom=search",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/dianyuan2c-80.jpg?width=80&height=80"
        }, {
          "text": "小米移动电源2",
          "href": "https://item.mi.com/1180200004.html?cfrom=search",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/dianyuan2-5qian-80.jpg?width=80&height=80"
        }, {
          "text": "小米随身手电筒",
          "href": "https://www.mi.com/flashlight/?cfrom=search",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/shoudiantong8080.jpg?width=80&height=80"
        }, {
          "text": "移动电源保护套",
          "href": "https://list.mi.com/137",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/baohutao80.jpg?width=80&height=80"
        }, {
          "text": "彩虹电池7号",
          "href": "https://item.mi.com/1155000010.html",
          "img": "https://i1.mifile.cn/f/i/15/goods/sidebar/7Battery1.jpg?width=80&height=80"
        }],
        [{
          "text": "彩虹5号电池（10粒装）",
          "href": "https://item.mi.com/1154300033.html",
          "img": "https://i1.mifile.cn/f/i/15/goods/sidebar/5Battery1.jpg?width=80&height=80"
        }, {
          "text": "USB充电器",
          "href": "https://list.mi.com/15",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/chongdianqi-80.jpg?width=80&height=80"
        }, {
          "text": "小米车载充电器",
          "href": "https://item.mi.com/1154400043.html?cfrom=list",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/chezaichongdianqi80.jpg?width=80&height=80"
        }, {
          "text": "米家随身风扇",
          "href": "https://item.mi.com/1162800007.html?cfrom=list",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/fengshan80.jpg?width=80&height=80"
        }, {
          "text": "小米插线板USB版",
          "href": "https://www.mi.com/powerstrip/?cfrom=search",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/chaxianbanusb-80.jpg?width=80&height=80"
        }, {
          "text": "米家插线板6位 基础版",
          "href": "https://www.mi.com/powerstrip6/?cfrom=list",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/chaxianban6wei-80.jpg?width=80&height=80"
        }],
        [{
          "text": "米家插线板3位长线版",
          "href": "https://item.mi.com/1170300008.html?cfrom=list",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/chaxianban3wei-80.jpg?width=80&height=80"
        }, {
          "text": "米家智能插线板",
          "href": "https://www.mi.com/mj-powerstrip/?cfrom=list",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/c1xb343.jpg?width=80&height=80"
        }]
      ]
    }, {
      "text": "耳机 音箱",
      "href": "https://www.mi.com/p/3480.html?client_id=180100041086&masid=17409.0244",
      "children_list": [
        [{
          "text": "小米蓝牙项圈耳机",
          "href": "https://search.mi.com/search_%E9%A1%B9%E5%9C%88",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/80xiangquan.jpg?width=80&height=80"
        }, {
          "text": "小米游戏耳机",
          "href": "https://item.mi.com/product/7919.html",
          "img": "https://i1.mifile.cn/f/i/g/2015/xiaomiyouxierjiyi.jpg?width=80&height=80"
        }, {
          "text": "小米双单元半入耳式耳机",
          "href": "https://www.mi.com/half-in-ear/?cfrom=search",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/erji80.jpg?width=80&height=80"
        }, {
          "text": "小米圈铁耳机 Pro",
          "href": "https://www.mi.com/earphonepro/",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/qtpro80.jpg?width=80&height=80"
        }, {
          "text": "小米圈铁耳机",
          "href": "https://www.mi.com/quantie/",
          "img": "https://i1.mifile.cn/f/i/15/goods/sidebar/quantie.jpg?width=80&height=80"
        }, {
          "text": "小米活塞耳机 清新版",
          "href": "https://www.mi.com/huosai3/",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/huosai1.jpg?width=80&height=80"
        }],
        [{
          "text": "小米降噪耳机",
          "href": "https://search.mi.com/search_%E9%99%8D%E5%99%AA%E8%80%B3%E6%9C%BA-182",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/xmjzej80.jpg?width=80&height=80"
        }, {
          "text": "小米胶囊耳机",
          "href": "https://www.mi.com/capsuleearphone/",
          "img": "https://i1.mifile.cn/f/i/15/goods/sidebar/jiaonang80.jpg?width=80&height=80"
        }, {
          "text": "小米头戴式耳机",
          "href": "https://www.mi.com/headphone/",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/toudai80.jpg?width=80&height=80"
        }, {
          "text": "小米运动蓝牙耳机",
          "href": "https://www.mi.com/sportearphone/",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/yundong80.jpg?width=80&height=80"
        }, {
          "text": "小米运动蓝牙耳机mini",
          "href": "https://www.mi.com/sportearphone-mini/",
          "img": "https://i1.mifile.cn/f/i/g/2015/3-80.jpg?width=80&height=80"
        }, {
          "text": "小米蓝牙耳机",
          "href": "https://list.mi.com/accessories/tag?id=lanyaerji",
          "img": "https://i1.mifile.cn/f/i/15/goods/sidebar/bluetoothheadset.jpg?width=80&height=80"
        }],
        [{
          "text": "小米蓝牙音频接收器",
          "href": "https://www.mi.com/bluetooth-audio/",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/20170707135935.jpg?width=80&height=80"
        }, {
          "text": "小米头戴式耳机 轻松版",
          "href": "https://www.mi.com/headphone2/",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/tdsqs80.jpg?width=80&height=80"
        }, {
          "text": "品牌耳机",
          "href": "https://list.mi.com/18",
          "img": "https://i1.mifile.cn/f/i/g/2015/video/pinpai80.jpg?width=80&height=80"
        }, {
          "text": "小米AI音箱",
          "href": "https://www.mi.com/aispeaker/",
          "img": "https://i1.mifile.cn/f/i/g/2015/80x80.jpg?width=80&height=80"
        }, {
          "text": "小米小钢炮蓝牙音箱2",
          "href": "https://www.mi.com/yinxiang/",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/xiaogangpao2-hei-80.jpg?width=80&height=80"
        }, {
          "text": "小米方盒子蓝牙音箱2",
          "href": "https://www.mi.com/bluetooth-speaker/",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/fhzlyyx80.jpg?width=80&height=80"
        }],
        [{
          "text": "小米蓝牙音箱",
          "href": "https://www.mi.com/pocketaudio/",
          "img": "https://i1.mifile.cn/f/i/15/goods/sidebar/pocketaudio.png?width=80&height=80"
        }, {
          "text": "小米随身蓝牙音箱",
          "href": "https://www.mi.com/littleaudio/",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/suishen-80.jpg?width=80&height=80"
        }, {
          "text": "小米米兔音箱",
          "href": "https://item.mi.com/1163100008.html",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/mituyinx80.jpg?width=80&height=80"
        }, {
          "text": "小爱音箱mini",
          "href": "https://www.mi.com/aispeaker-mini/?cfrom=search",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/yinxiangmini80.jpg?width=80&height=80"
        }, {
          "text": "小米电视音响",
          "href": "https://www.mi.com/tvspeaker/",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/80.....80.jpg?width=80&height=80"
        }]
      ]
    }, {
      "text": "生活 米兔",
      "href": "https://www.mi.com/p/3484.html?client_id=180100041086&masid=17409.0242",
      "children_list": [
        [{
          "text": "旅行箱",
          "href": "https://search.mi.com/search_%E6%97%85%E8%A1%8C%E7%AE%B1",
          "img": "https://i1.mifile.cn/f/i/15/goods/sidebar/lvxingxiang.jpg?width=80&height=80"
        }, {
          "text": "双肩包",
          "href": "https://search.mi.com/search_%E5%8F%8C%E8%82%A9%E5%8C%85",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/xiangbao-80.jpg?width=80&height=80"
        }, {
          "text": "儿童书包",
          "href": "https://search.mi.com/search_%E5%84%BF%E7%AB%A5%E4%B9%A6%E5%8C%85",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/ertongshubao.80.jpg?width=80&height=80"
        }, {
          "text": "胸包",
          "href": "https://search.mi.com/search_%E8%83%B8%E5%8C%85",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/xiongbao-80.jpg?width=80&height=80"
        }, {
          "text": "钱包",
          "href": "https://search.mi.com/search_%E9%92%B1%E5%8C%85",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/qianbao-80.jpg?width=80&height=80"
        }, {
          "text": "收纳包",
          "href": "https://item.mi.com/1174200004.html?cfrom=search",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/shounabao-80.jpg?width=80&height=80"
        }],
        [{
          "text": "服饰",
          "href": "https://search.mi.com/search_%E7%9F%AD%E8%A2%96",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/txv80.jpg?width=80&height=80"
        }, {
          "text": "运动鞋",
          "href": "https://search.mi.com/search_%E8%BF%90%E5%8A%A8%E9%9E%8B",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/ydx80.jpg?width=80&height=80"
        }, {
          "text": "围巾",
          "href": "https://search.mi.com/search_%E5%9B%B4%E5%B7%BE",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/weibo-80.jpg?width=80&height=80"
        }, {
          "text": "眼镜",
          "href": "https://search.mi.com/search_%E7%9C%BC%E9%95%9C",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/tyj80.jpg?width=80&height=80"
        }, {
          "text": "米家签字笔",
          "href": "https://search.mi.com/search_%E7%B1%B3%E5%AE%B6%E7%AD%BE%E5%AD%97%E7%AC%94",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/qianzibi-80.jpg?width=80&height=80"
        }, {
          "text": "文具",
          "href": "https://search.mi.com/search_%E5%A4%9A%E7%94%A8%E7%AC%94%E8%AE%B0%E6%9C%AC",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/duoyongbijiben-80.jpg?width=80&height=80"
        }],
        [{
          "text": "玻璃保鲜盒",
          "href": "https://search.mi.com/search_%E4%BF%9D%E9%B2%9C%E7%9B%92",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/baoxianhe.80.jpg?width=80&height=80"
        }, {
          "text": "自动折叠伞",
          "href": "https://search.mi.com/search_%E6%8A%98%E5%8F%A0%E4%BC%9E",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/san.jpg?width=80&height=80"
        }, {
          "text": "米家 wiha 精修螺丝刀套装",
          "href": "https://www.mi.com/screwdriver/?cfrom=search",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/luosidao-80.jpg?width=80&height=80"
        }, {
          "text": "米兔玩偶",
          "href": "https://search.mi.com/search_%E7%B1%B3%E5%85%94%E7%8E%A9%E5%81%B6",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/mitu-80.jpg?width=80&height=80"
        }, {
          "text": "米兔磁力积木",
          "href": "https://search.mi.com/search_%E7%B1%B3%E5%85%94%E7%A3%81%E5%8A%9B%E7%A7%AF%E6%9C%A8",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/cilijimu.80.jpg?width=80&height=80"
        }, {
          "text": "牙刷",
          "href": "https://search.mi.com/search_%E7%89%99%E5%88%B7",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/yashua80.jpg?width=80&height=80"
        }],
        [{
          "text": "沙发",
          "href": "https://search.mi.com/search_%E6%B2%99%E5%8F%91",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/shafa.80.png?width=80&height=80"
        }, {
          "text": "枕头",
          "href": "https://search.mi.com/search_%E6%9E%95%E5%A4%B4",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/zhent.ou80.png?width=80&height=80"
        }, {
          "text": "被子",
          "href": "https://search.mi.com/search_%E8%A2%AB%E5%AD%90",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/beizi8.0..png?width=80&height=80"
        }, {
          "text": "床垫",
          "href": "https://search.mi.com/search_%E5%BA%8A%E5%9E%AB",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/chuangdian-80-80.jpg?width=80&height=80"
        }, {
          "text": "针织件套",
          "href": "https://search.mi.com/search_%E9%92%88%E7%BB%87",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/sijiantao-80-80.jpg?width=80&height=80"
        }, {
          "text": "饰品",
          "href": "https://search.mi.com/search_%E9%A5%B0%E5%93%81",
          "img": "https://i1.mifile.cn/f/i/g/2015/cn-index/jinmitu.jpg?width=80&height=80"
        }]
      ]
    }],
    "bottom_lis": [],
    "top_lis": [{
      "text": "小米手机",
      "href": "javascript:void(0)"
    }, {
      "text": "红米",
      "href": "javascript:void(0)"
    }, {
      "text": "电视",
      "href": "javascript:void(0)"
    }, {
      "text": "笔记本",
      "href": "javascript:void(0)"
    }, {
      "text": "盒子",
      "href": "javascript:void(0)"
    }, {
      "text": "新品",
      "href": "javascript:void(0)"
    }, {
      "text": "路由器",
      "href": "javascript:void(0)"
    }, {
      "text": "智能硬件",
      "href": "javascript:void(0)"
    }, {
      "text": "服务",
      "href": "javascript:void(0)"
    }, {
      "text": "社区",
      "href": "javascript:void(0)"
    }]
  }
});
var app_sections = new Vue({
  "el": "#sections",
  "data": {
    "sections": []
  }
});
