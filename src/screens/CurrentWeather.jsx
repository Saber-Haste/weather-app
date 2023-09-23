import React from 'react'
import {View, Text, StyleSheet, SafeAreaView} from 'react-native'
import Feather from "react-native-vector-icons/Feather"
import RowText from '../components/RowText'
const CurrentWeather = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Feather name="sun" size={100} color={"black"} />
        <Text style={styles.temp}>24</Text>
        <Text style={styles.feels}>Feels like 20</Text>       
        <RowText
          messageOne = {"High:8"}
          messageTwo = {"Low:5"}
          containerStyles = {styles.highlowwrapper}
          messageOneStyles = {styles.highlow}
          messageTwoStyles = {styles.highlow}
        />
      </View>
      <RowText
        messageOne = {"its Sunny"}
        messageTwo = {"its perfect tshirt weather"}
        containerStyles = {styles.bodyWrapper}
        messageOneStyles = {styles.discription}
        messageTwoStyles = {styles.message}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
      flex: 1,
      backgroundColor: "pink",
      
  },
  container: {

    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    
    
  },
  feels: {
    fontSize: 30,
    color: "black"
  },
  highlow: {
    color: "black",
    fontSize: 20
  },
  highlowwrapper: {
    flexDirection: "row"
  },
  bodyWrapper: {
    justifyContent: "flex-end",
    alignItems: "flex-start",  //default value but still i specify
    paddingLeft: 25,
    marginBottom: 40,

    // backgroundColor: "yellow" //to check view
  },
  discription: {
    fontSize: 48
  },
  message: {
    fontSize: 30
  },
  temp: {
    color: "black",
    fontSize: 50
  },

})
export default CurrentWeather