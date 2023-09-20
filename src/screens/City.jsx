/* eslint-disable no-undef */
import React from "react";
import { StyleSheet, Text, View,SafeAreaView,ImageBackground } from "react-native";
const City = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground
            style={styles.image}
            source={require("../../assets/city.jpg")} >
            <Text style={[styles.cityname,styles.common]}>Delhi</Text>
            <Text style={[styles.country,styles.common]}>India</Text>

            

            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1
    },
    image: {
        flex:1
    },
    cityname:{
        fontSize:40,
    },
    country:{
        fontSize:30,
    },
    common:{        
    fontWeight:"bold",
    color:"white",
    justifyContent: "center",
    alignSelf:"center",
    }
})
export default City