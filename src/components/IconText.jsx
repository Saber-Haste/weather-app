/* eslint-disable react/prop-types */
import React from "react";
import Feather from "react-native-vector-icons/Feather"
import { View,Text,StyleSheet } from "react-native";

const IconText = (props) => {
    const {iconName,iconColor,bodyText,bodyTextStyles} = props
    return(
        <View>
            <Feather
            name={iconName} size={50} color={iconColor}/>
            <Text style={[styles.textTheme,bodyTextStyles]}>{bodyText}</Text>
        </View>
        )
}

const styles = StyleSheet.create({
    textTheme: {
        fontWeight:"bold",
    }
})
export default IconText