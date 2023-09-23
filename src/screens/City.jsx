/* eslint-disable no-undef */
import React from "react";
import { StyleSheet, Text, View,SafeAreaView,ImageBackground,StatusBar } from "react-native";
import Feather from "react-native-vector-icons/Feather"
import IconText from "../components/IconText";
const City = () => {
    const  {container,cityname,country,rowlayout,cityText,image,populationwrapper,populationtext,setrisetext,setrisewrapper} = styles
    return (
        <SafeAreaView style={container}>
            <StatusBar
            backgroundColor={"#765864"}
            />
            <ImageBackground
            style={image}
            source={require("../../assets/city.jpg")} >
            <Text style={[cityname,cityText]}>Delhi</Text>
            <Text style={[country,cityText]}>India</Text>
            <View style={[populationwrapper,rowlayout]}>
                <IconText 
                    iconName={"user"} 
                    iconColor={"red"} 
                    bodyText={"8000"}
                    bodyTextStyles={populationtext}
                    />
            </View>
            <View style={[rowlayout,setrisewrapper]}>
               <IconText 
                    iconName={"sunrise"} 
                    iconColor={"black"} 
                    bodyText={"6:30:00am"}
                    bodyTextStyles={setrisetext}
                    />
                   <IconText 
                    iconName={"sunrise"} 
                    iconColor={"black"} 
                    bodyText={"6:00:00pm"}
                    bodyTextStyles={setrisetext}
                    />
            </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,

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
    cityText:{        
    fontWeight:"bold",
    color:"white",
    justifyContent: "center",
    alignSelf:"center",
    },
    populationwrapper:{
        justifyContent:"center"
    },
    populationtext:{
        fontSize:25,
        marginLeft:7.5,
        color:"red",
 
    },
    setrisewrapper:{
        justifyContent:"space-around",
    },
    setrisetext:{
        fontSize:20,
        color:"black",

    },
    rowlayout:{
        flexDirection:"row",
        alignItems:"center",
        marginTop:30,

    }

})
export default City