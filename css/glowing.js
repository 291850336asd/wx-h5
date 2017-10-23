import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "disco1": {
        "WebkitAnimation": "disco1 0.5s infinite"
    },
    "disco2": {
        "WebkitAnimation": "disco2 1s infinite"
    },
    "disco3": {
        "WebkitAnimation": "disco3 1s infinite"
    },
    "disco4": {
        "WebkitAnimation": "disco4 2s infinite"
    },
    "disco5": {
        "WebkitAnimation": "disco5 1s infinite"
    }
});