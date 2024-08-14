import React from "react";
import { StyleSheet, View } from "react-native";
import { colors } from "../styles/theme";
import { BORDER, BORDER_RADIUS, GAP, HEADER_HEIGHT, PIXEL } from "../consts";

const Board = ({ rows, cols, top}) => {
    const dots = Array(rows * cols).fill(0);
    return (
        <View style={[styles.board, { top: HEADER_HEIGHT + top}]}>
            {dots.map((_, index))}
        </View>
    )
}