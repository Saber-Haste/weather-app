/* eslint-disable react/prop-types */
import React from "react";
import { View,StyleSheet,Text } from "react-native";
import Feather from "react-native-vector-icons/Feather"


const ListItem = (props) => {
  const {dt_txt,temp_min,temp_max} = props
  return (
      <View style={styles.item}>
          <Feather name={"sun"} size={50} color={"white"}/>
          <Text style={styles.date}>{dt_txt}</Text>
          <Text style={styles.temp}>{temp_min}</Text>
          <Text style={styles.temp}>{temp_max}</Text>
      </View>
  )
}
const styles = StyleSheet.create({

      date: {
        color:"white",
        fontSize: 15
      },
      temp : {
        color: "white",
        fontSize: 18
      },
      item: {
        
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        justifyContent: "space-around",
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 5,
        backgroundColor: "pink",
  
  
      }

})
export default ListItem