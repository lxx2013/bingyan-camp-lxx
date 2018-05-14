var app1 = new Vue({
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
            "text": "水滴",
            "href": "https://shuidi.mi.com/"
        }, {
            "text": "金融",
            "href": "https://jr.mi.com?from=micom"
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
            "href": "https://order.mi.com/site/login"
        }, {
            "text": "注册",
            "href": "https://account.xiaomi.com/pass/register"
        }]
    }
})
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
        "left_lis": [],
        "bottom_lis": [1, 2, 3],
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
var app3 = new Vue({
    el: "#sections",
    data: {
        sections: [{
            title: "智能",
            left_lis: [
            1, 2
        ],
            top_lis: [{
                text: "热门",
                isActive: true
        }, {
                text: "出行",
                isActive: false
        }, {
                text: "健康",
                isActive: false
        }, {
                text: "酷玩",
                isActive: false
        }, {
                text: "路由器",
                isActive: false
        }],
            right_lis: [
            1, 2, 3, 4, 5, 6, 7, 8, 9
        ]

    }, {
            title: "配件",
            left_lis: [
            1, 2
        ],
            top_lis: [{
                text: "热门",
                isActive: true
        }, {
                text: "出行",
                isActive: false
        }, {
                text: "健康",
                isActive: false
        }, {
                text: "酷玩",
                isActive: false
        }, {
                text: "路由器",
                isActive: false
        }],
            right_lis: [
            1, 2, 3, 4, 5, 6, 7, 8, 9
        ]

    }, {
            title: "周边"
    }, {
            title: "为你推荐"
    }]
    }
})
