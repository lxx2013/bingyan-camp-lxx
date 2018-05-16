var app_header = new Vue({
    "el": "#header",
    "data": {
        "left_lis": [],
        "right_lis": []
    }
});
var app_main = new Vue({
    "el": "#main",
    "data": {
        "input_lis": [],
        "left_lis": [],
        "right_lis": [{
            "href": "https://item.mi.com/product/10000084.html",
            "img": "https://i1.mifile.cn/a4/xmad_15246478201362_kKxQF.jpg"
        }, {
            "href": "https://www.mi.com/a/h/5821.html?client_id=180100041086&masid=17409.0359",
            "img": "https://i1.mifile.cn/a4/xmad_15264341530179_yVgTQ.jpg"
        }, {
            "href": "https://item.mi.com/product/10000079.html",
            "img": "https://i1.mifile.cn/a4/xmad_15262621679276_AmBdv.jpg"
        }, {
            "href": "https://item.mi.com/product/7795.html",
            "img": "https://i1.mifile.cn/a4/xmad_15260350065386_DWnjt.jpg"
        }, {
            "href": "https://www.mi.com/migaminglaptop/",
            "img": "https://i1.mifile.cn/a4/xmad_15263512955904_ehZUK.jpg"
        }, {
            "href": "https://item.mi.com/product/4348.html",
            "img": "https://i1.mifile.cn/a4/xmad_15259408612582_TGdhA.jpg"
        }],
        "bottom_lis": [],
        "top_lis": []
    }
});
var app_sections = new Vue({
    "el": "#sections",
    "data": {
        "sections": []
    }
});
