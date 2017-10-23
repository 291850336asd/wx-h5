import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "earth_circle_div": {
        "width": "54%",
        "height": "54%",
        "left": "22%",
        "top": "20%"
    },
    "earth_circle_div > div": {
        "position": "absolute",
        "width": "50%",
        "height": "50%",
        "left": "25%",
        "top": "22%",
        "borderRadius": "50%",
        "border": "0px solid #fff",
        "WebkitTransformStyle": "preserve-3d",
        "WebkitTransform": "rotateX(80deg) rotateY(20deg)",
        "transformStyle": "preserve-3d",
        "transform": "rotateX(80deg) rotateY(20deg)"
    },
    "earth_circle_div > div:first-of-type:after": {
        "content": "",
        "position": "absolute",
        "height": 0,
        "width": 40,
        "background": "#0fff",
        "borderRadius": "50%",
        "WebkitTransform": "rotateX(-80deg) rotateY(0)",
        "transform": "rotateX(-80deg) rotateY(0)",
        "boxShadow": "0 0 25px #0fff",
        "WebkitAnimation": "nucleus_ 2s infinite linear",
        "animation": "nucleus_ 2s infinite linear",
        "left": "50%",
        "top": "50%"
    },
    "earth_circle_div > div:nth-of-type(2)": {
        "WebkitTransform": "rotateX(-60deg) rotateY(20deg)",
        "transform": "rotateX(-80deg) rotateY(20deg)"
    },
    "earth_circle_div > div:nth-of-type(3)": {
        "WebkitTransform": "rotateX(-60deg) rotateY(60deg)",
        "transform": "rotateX(-70deg) rotateY(60deg)"
    },
    "earth_circle_div > div:nth-of-type(4)": {
        "WebkitTransform": "rotateX(60deg) rotateY(60deg)",
        "transform": "rotateX(70deg) rotateY(60deg)"
    },
    "earth_circle_div > div > div": {
        "width": "100%",
        "height": "100%",
        "position": "relative",
        "WebkitTransformStyle": "preserve-3d",
        "WebkitAnimation": "trail_ 2s infinite linear",
        "transformStyle": "preserve-3d",
        "animation": "trail_ 2s infinite linear"
    },
    "earth_circle_div > div > div:after": {
        "content": "",
        "position": "absolute",
        "boxShadow": "0 0 12px #fff",
        "width": 5,
        "height": 5,
        "borderRadius": "50%",
        "backgroundColor": "#fff",
        "WebkitAnimation": "particle_ 2s infinite linear",
        "animation": "particle_ 2s infinite linear"
    },
    "earth_circle_div > div:nth-of-type(2) > div": {
        "WebkitAnimationDelay": "-.5s",
        "animationDelay": "-.5s"
    },
    "earth_circle_div > div:nth-of-type(2) > div:after": {
        "WebkitAnimationDelay": "-.5s",
        "animationDelay": "-.5s"
    },
    "earth_circle_div > div:nth-of-type(3)  > div": {
        "WebkitAnimationDelay": "-1s",
        "animationDelay": "-1s"
    },
    "earth_circle_div > div:nth-of-type(3)  > div:after": {
        "WebkitAnimationDelay": "-1s",
        "animationDelay": "-1s"
    },
    "earth_circle_div > div:nth-of-type(4) > div": {
        "WebkitAnimationDelay": "-1.5s",
        "animationDelay": "-1.5s"
    },
    "earth_circle_div > div:nth-of-type(4) > div:after": {
        "WebkitAnimationDelay": "-1.5s",
        "animationDelay": "-1.5s"
    }
});