import React from 'react'
import {View, Text, StyleSheet, SafeAreaView} from 'react-native'
import Feather from "react-native-vector-icons/Feather"

const CurrentWeather = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Feather name="sun" size={100} color={"black"} />
        <Text style={styles.temp}>24</Text>
        <Text style={styles.feels}>Feels like 20</Text>       
        <View style={styles.highlowwrapper}>
          <Text style={styles.highlow}>High: 26</Text>
          <Text style={styles.highlow}> Low: 18</Text>
        </View>
      </View>
      <View style={styles.bodyWrapper}>
        <Text style={styles.discription}>Its sunny</Text>
        <Text style={styles.message}>Its perfect t-shirt weather</Text>
      </View>
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
  temp: {
    color: "black",
    fontSize: 50
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

    //backgroundColor: "yellow" //to check view
  },
  discription: {
    fontSize: 48
  },
  message: {
    fontSize: 30
  }

})
export default CurrentWeather