import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "*": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "html": {
        "height": "100%",
        "fontSize": "62.5%"
    },
    "body": {
        "height": "100%",
        "fontSize": "62.5%",
        "fontFamily": "microsoft yahei",
        "background": "#fff",
        "position": "relative"
    },
    "ul": {
        "listStyle": "none"
    },
    "li": {
        "listStyle": "none"
    },
    "swiper-container": {
        "width": "100%",
        "maxWidth": 640,
        "height": "100%"
    },
    "swiper-slide-v1": {
        "width": "100%",
        "height": "100%",
        "background": "url(../images/bg1.jpg)",
        "backgroundSize": "100% 100%",
        "overflow": "hidden"
    },
    "swiper-slide-v2": {
        "width": "100%",
        "height": "100%",
        "background": "url(../images/bg1.jpg)",
        "backgroundSize": "100% 100%",
        "overflow": "hidden"
    },
    "swiper-slide-v3": {
        "width": "100%",
        "height": "100%",
        "background": "url(../images/bg1.jpg)",
        "backgroundSize": "100% 100%",
        "overflow": "hidden"
    },
    "swiper-slide-v4": {
        "width": "100%",
        "height": "100%",
        "background": "url(../images/bg1.jpg)",
        "backgroundSize": "100% 100%",
        "overflow": "hidden"
    },
    "swiper-slide-v5": {
        "width": "100%",
        "height": "100%",
        "background": "url(../images/bg1.jpg)",
        "backgroundSize": "100% 100%",
        "overflow": "hidden"
    },
    "swiper-slide-v6": {
        "width": "100%",
        "height": "100%",
        "background": "url(../images/bg1.jpg)",
        "backgroundSize": "100% 100%",
        "overflow": "hidden"
    },
    "img": {
        "display": "block",
        "width": "100%"
    },
    "swiper-pagination-bullet": {
        "width": 6,
        "height": 6,
        "background": "#fff",
        "opacity": 0.4
    },
    "swiper-pagination-bullet-active": {
        "opacity": 1
    },
    "arrow-box": {
        "position": "absolute",
        "bottom": -26,
        "left": 0,
        "right": 0,
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "width": "50%",
        "height": 90,
        "zIndex": 20
    },
    "array": {
        "zIndex": 99,
        "WebkitAnimation": "start 1.5s infinite ease-in-out",
        "display": "block",
        "marginTop": 15,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "width": 32,
        "height": 30
    },
    "top-box": {
        "position": "absolute",
        "top": -45,
        "left": 0,
        "right": 0,
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "width": "50%",
        "height": 90,
        "zIndex": 900,
        "transform": "rotate(180deg)",
        "MsTransform": "rotate(180deg)",
        "MozTransform": "rotate(180deg)",
        "WebkitTransform": "rotate(180deg)",
        "OTransform": "rotate(180deg)"
    },
    "arraytop": {
        "zIndex": 999,
        "WebkitAnimation": "start 1.5s infinite ease-in-out",
        "display": "block",
        "marginTop": 15,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "width": 20,
        "height": 15
    },
    "loading": {
        "WebkitAnimationName": "loading",
        "animationName": "loading"
    },
    "poster_wrapload": {
        "height": "100%",
        "zIndex": 100,
        "backgroundSize": "100%"
    },
    "poster_wrap": {
        "WebkitTransform": "translate3d(0,0,0)",
        "WebkitTransition": "-webkit-transform .3s linear,opacity .3s linear"
    },
    "p_loading": {
        "position": "absolute",
        "top": -40,
        "left": 0,
        "right": 0,
        "bottom": 0,
        "marginTop": "auto",
        "marginRight": "auto",
        "marginBottom": "auto",
        "marginLeft": "auto",
        "width": "100%",
        "height": 150
    },
    "p_loading_logo": {
        "display": "block",
        "width": 100,
        "height": 100,
        "background": "url(../images/zp_loading_new.png) center top no-repeat",
        "backgroundSize": "100%",
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "WebkitAnimation": "loading 3s linear infinite",
        "animation": "loading 3s linear infinite"
    },
    "p_loading_tip": {
        "color": "#ccc",
        "fontSize": 15,
        "textAlign": "center",
        "lineHeight": 25,
        "marginTop": 25,
        "textShadow": "1px 1px 1px rgba(0,0,0,.1)"
    },
    "show": {
        "display": "block"
    },
    "hide": {
        "display": "none"
    },
    "expose_center": {
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "paddingTop": "25%",
        "width": "90%"
    },
    "page_container": {
        "width": "100%",
        "height": "100%",
        "background": "url(../images/2/light_bg.png) center top no-repeat",
        "backgroundSize": "100% 100%"
    },
    "page1_title_img": {
        "marginTop": "10%",
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "width": "65%",
        "height": "16%"
    },
    "video_div": {
        "position": "relative",
        "marginTop": "7%",
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "width": "78%",
        "height": "auto"
    },
    "video_bg_head": {
        "width": "100%",
        "height": "10%"
    },
    "video_page": {
        "width": "100%",
        "height": "90%",
        "background": "url(../images/1/video_page.jpg) center top no-repeat",
        "backgroundSize": "100%"
    },
    "video_play": {
        "display": "none",
        "position": "absolute",
        "marginTop": "20%",
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "width": "14%",
        "height": "25%"
    },
    "video_real": {
        "width": "100%",
        "height": "100%"
    },
    "x_bg": {
        "position": "relative",
        "width": "100%",
        "height": "60%",
        "marginTop": "-45%",
        "background": "url(../images/1/X_bg.png) center top no-repeat",
        "backgroundSize": "100% 100%",
        "zIndex": -10
    },
    "x_page": {
        "position": "absolute",
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "width": "68%",
        "left": "16%",
        "bottom": "20%",
        "height": "28%"
    },
    "page1_now_order": {
        "marginTop": "-12%",
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "width": "31%",
        "height": "5%"
    },
    "page2_title_img": {
        "marginTop": "8%",
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "width": "80%",
        "height": "6%"
    },
    "circle_div": {
        "position": "relative",
        "marginTop": "7%",
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "width": 25,
        "height": 25
    },
    "circle_light_img": {
        "position": "absolute",
        "width": "100%",
        "height": "100%"
    },
    "circle_star_img": {
        "position": "absolute",
        "left": "5%",
        "top": "5%",
        "width": "90%",
        "height": "90%"
    },
    "inner_circle": {
        "position": "absolute",
        "left": "20%",
        "top": "20%",
        "width": "60%",
        "height": "60%",
        "zIndex": -1
    },
    "shalou": {
        "position": "absolute",
        "left": "31%",
        "top": "26%",
        "width": "38%",
        "height": "48%"
    },
    "page2_text_div": {
        "marginTop": "6%"
    },
    "p": {
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto"
    },
    "page2_p_title": {
        "color": "#0BFFFF",
        "fontSize": 2,
        "textAlign": "center"
    },
    "page2_p_title_center": {
        "marginTop": "4%",
        "color": "#FFF",
        "fontSize": 1.5,
        "textAlign": "center"
    },
    "page2_p_text_first": {
        "marginTop": "2%"
    },
    "page2_p_text": {
        "color": "#FFF",
        "fontSize": 1.2,
        "textAlign": "center"
    },
    "page1_p_text": {
        "color": "#FFF",
        "fontSize": 1.5,
        "textAlign": "center"
    },
    "huangguan": {
        "position": "absolute",
        "left": "30%",
        "top": "30%",
        "width": "40%",
        "height": "36%"
    },
    "page3_text_div": {
        "marginTop": "5%"
    },
    "rights_black_div": {
        "marginTop": "3%",
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "width": "72%",
        "height": "8%",
        "paddingTop": 1,
        "paddingBottom": 1,
        "paddingLeft": 1.5,
        "background": "url(../images/3/rights_bg.png) center top no-repeat",
        "backgroundSize": "100% 100%"
    },
    "shuli": {
        "display": "inline-block",
        "float": "left",
        "color": "#FFF",
        "fontSize": 1.2,
        "lineHeight": 1.2,
        "width": 1.2
    },
    "rights_item_div": {
        "display": "inline-block",
        "width": "95%"
    },
    "rights_item": {
        "color": "#FFF",
        "lineHeight": 1.2,
        "fontSize": 1,
        "textAlign": "left",
        "marginLeft": 1
    },
    "rights_item_margin": {
        "marginTop": 0.6
    },
    "page3_bottom_text": {
        "color": "#FFF",
        "lineHeight": 1,
        "fontSize": 1,
        "textAlign": "center",
        "marginTop": "3%"
    },
    "page4_title_content_margin": {
        "marginTop": "6%"
    },
    "circle_div_4": {
        "position": "relative",
        "marginTop": "8%",
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "width": 23,
        "height": 23
    },
    "earth": {
        "position": "absolute",
        "left": "22%",
        "top": "20%",
        "width": "54%",
        "height": "54%"
    },
    "page5_title_img": {
        "marginTop": "10%",
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "width": "55%",
        "height": "13%"
    },
    "page5_use_type": {
        "marginTop": "14%",
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto"
    },
    "page5_mark_type": {
        "marginTop": "10%",
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto"
    },
    "page5_use_type_title": {
        "color": "#0BFFFF",
        "fontSize": 2.5,
        "textAlign": "center"
    },
    "page5_p_text": {
        "color": "#FFF",
        "fontSize": 1.2,
        "textAlign": "center"
    },
    "page6_p_text": {
        "color": "#FFF",
        "fontSize": 1.2,
        "textAlign": "center"
    },
    "page5_use_type_margin": {
        "marginTop": "3%"
    },
    "page5_use_type_margin2": {
        "marginTop": "1.5%"
    },
    "circle_div_6": {
        "position": "relative",
        "marginTop": "10%",
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "width": 20,
        "height": 20
    },
    "userhead": {
        "position": "absolute",
        "left": "34%",
        "top": "30%",
        "width": "32%",
        "height": "40%"
    },
    "page6_line_margin": {
        "marginTop": "3%"
    },
    "page6_line_margin_first": {
        "marginTop": "10%"
    },
    "page6_now_div": {
        "marginTop": "6%",
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "width": "72%",
        "height": "5%"
    },
    "page6_now_order": {
        "width": "44%",
        "height": "100%",
        "display": "inline-block"
    },
    "page6_now_share": {
        "width": "44%",
        "height": "100%",
        "marginLeft": "11%",
        "display": "inline-block"
    },
    "clearfloat": {
        "clear": "both"
    },
    "overLayer": {
        "width": "100%",
        "height": "100%",
        "position": "absolute",
        "top": 0,
        "right": 0,
        "background": "rgba(0,0,0,0.8)",
        "zIndex": 100
    },
    "share_div": {
        "float": "right",
        "marginTop": "5%",
        "marginRight": "3%"
    },
    "share_icon": {
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "width": 3,
        "height": 3
    },
    "share_text": {
        "width": "auto",
        "height": 2,
        "marginTop": 0.5
    },
    "input_bg_div": {
        "marginTop": "50%",
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "width": "78%",
        "height": "auto",
        "paddingTop": 3,
        "paddingBottom": 3.5,
        "background": "url(../images/float/1/float_bg.png) center top no-repeat",
        "backgroundSize": "100% 100%"
    },
    "float_phone_text": {
        "color": "#0BFFFF",
        "fontSize": 1.5,
        "lineHeight": 1.5,
        "textAlign": "center"
    },
    "float_phone_text2": {
        "marginTop": 1,
        "color": "#0BFFFF",
        "fontSize": 1.5,
        "lineHeight": 1.5,
        "textAlign": "center"
    },
    "input_bg": {
        "marginTop": 2,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "width": "82%",
        "height": 3,
        "background": "url(../images/float/1/text_white_bg.png) center top no-repeat",
        "backgroundSize": "100% 100%"
    },
    "input": {
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "display": "block",
        "background": "none",
        "outline": "none",
        "border": 0,
        "width": "92%",
        "height": "100%",
        "fontSize": 1.5,
        "color": "#000"
    },
    "float_confirm": {
        "marginTop": 2.5,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "width": "24%",
        "height": 2.5
    },
    "share_bg_div": {
        "marginTop": "50%",
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "width": "78%",
        "height": "auto",
        "paddingTop": 5,
        "paddingBottom": 2.5,
        "background": "url(../images/float/1/float_bg.png) center top no-repeat",
        "backgroundSize": "100% 100%"
    },
    "success_text": {
        "color": "#00FFFF",
        "fontSize": 2,
        "fontWeight": "bold",
        "lineHeight": 2,
        "textAlign": "center"
    },
    "line_img": {
        "marginTop": 1.5,
        "marginRight": "auto",
        "marginBottom": 1.5,
        "marginLeft": "auto",
        "width": "76%",
        "height": "auto"
    },
    "lexin_logo": {
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "height": "8%",
        "width": "30%"
    },
    "bg_item_div": {
        "position": "absolute",
        "zIndex": 90
    },
    "bg_item_1": {
        "top": "2%",
        "left": "2%",
        "width": 3,
        "height": 2
    },
    "bg_item_2": {
        "top": "26%",
        "left": "8%",
        "width": 1,
        "height": 3.5
    },
    "bg_item_3": {
        "top": "55%",
        "left": "2%",
        "width": 3,
        "height": 2
    },
    "bg_item_4": {
        "top": "15%",
        "right": "5%",
        "width": 1,
        "height": 2.5
    },
    "bg_item_5": {
        "top": "85%",
        "left": "7%",
        "width": 1,
        "height": 3
    },
    "bg_item_6": {
        "top": "58%",
        "right": "0%",
        "width": 3,
        "height": 3
    },
    "bg_item_7": {
        "top": "30%",
        "right": "6%",
        "width": 1,
        "height": 3.5
    },
    "bg_item_8": {
        "top": "80%",
        "right": "3%",
        "width": 3,
        "height": 2
    },
    "thisRotateshalou": {
        "WebkitAnimation": "thisRotate 5s linear infinite"
    },
    "thisRotate": {
        "WebkitAnimation": "thisRotate 8s linear infinite"
    },
    "thisRotate-1": {
        "WebkitAnimation": "thisRotate 8s linear infinite"
    },
    "thisRotate1": {
        "WebkitAnimation": "thisRotate1 8s linear infinite"
    },
    "ThisScaleShare": {
        "WebkitAnimation": "ThisScale2 1s 1s ease-out infinite alternate"
    },
    "ThisScale": {
        "WebkitAnimation": "ThisScale 1s 1s ease-out infinite alternate"
    }
});