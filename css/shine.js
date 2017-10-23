import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "*:before": {
        "WebkitBoxSizing": "border-box",
        "MozBoxSizing": "border-box",
        "boxSizing": "border-box"
    },
    "*:after": {
        "WebkitBoxSizing": "border-box",
        "MozBoxSizing": "border-box",
        "boxSizing": "border-box"
    },
    "screen": {
        "position": "absolute",
        "top": "50%",
        "left": "50%",
        "width": 320,
        "height": 210,
        "marginTop": -105,
        "marginLeft": -160,
        "borderRadius": 8,
        "boxShadow": "0 0 80px #0caba8",
        "overflow": "hidden",
        "zIndex": 100000,
        "WebkitAnimation": "screenMove01 2s,                       boxShine     2.5s 2s infinite alternate ,                       screenMove02 5s infinite alternate linear",
        "MozAnimation": "screenMove01 2s,                       boxShine     2.5s 2s infinite alternate ,                       screenMove02 5s infinite alternate linear",
        "OAnimation": "screenMove01 2s,                       boxShine     2.5s 2s infinite alternate ,                       screenMove02 5s infinite alternate linear",
        "animation": "screenMove01 2s,                       boxShine     2.5s 2s infinite alternate ,                       screenMove02 5s infinite alternate linear"
    },
    "screen::before": {
        "display": "block",
        "content": "",
        "position": "absolute",
        "top": 0,
        "left": 0,
        "width": 320,
        "height": 210,
        "borderWidth": 5,
        "borderStyle": "solid",
        "borderImage": "linear-gradient(to bottom, rgba(29,186,180,1) 0%, rgba(126,252,247,1) 26%, rgba(227,253,252,1) 30%, rgba(126,252,247,1) 36%, rgba(29,186,180,1) 52%, rgba(29,186,180,1) 74%, rgba(164,247,244,1) 91%, rgba(29,186,180,1) 100%) 1"
    },
    "screen::after": {
        "display": "block",
        "content": "",
        "position": "absolute",
        "top": 3,
        "left": 3,
        "width": 314,
        "height": 204,
        "border": "3px solid #1d1d1d",
        "borderColor": "rgba(29,29,29,0.9)",
        "borderRadius": 5,
        "background": "linear-gradient( 135deg, rgba(29,186,180,1) 0%, rgba(227,253,252,1) 17%, rgba(227,253,252,1) 25%, rgba(42,197,191,1) 48%, rgba(126,252,247,1) 93%, rgba(29,186,180,1) 100%)",
        "WebkitBackgroundSize": "300% 300%",
        "MozBackgroundSize": "300% 300%",
        "OBackgroundSize": "300% 300%",
        "MsBackgroundSize": "300% 300%",
        "backgroundSize": "300% 300%",
        "WebkitAnimation": "bgShine 5s  infinite alternate linear",
        "MozAnimation": "bgShine 5s  infinite alternate linear",
        "OAnimation": "bgShine 5s  infinite alternate linear",
        "animation": "bgShine 5s  infinite alternate linear"
    }
});