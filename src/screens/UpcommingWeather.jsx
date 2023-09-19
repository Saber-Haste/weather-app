/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import React from "react"
import { View,StyleSheet,SafeAreaView,Text,FlatList } from "react-native" 
import Feather from "react-native-vector-icons/Feather"
import { StatusBar } from "react-native"
import { ImageBackground } from "react-native"
import ListItem from "./src/components/Listitem"


const  DATA = [
  {
      dt_txt: "2022-08-30 16:00:00",
      main: {
        temp_min: 296.34,
        temp_max: 298.24,
      },
      weather: [
        {
          main: "Rain"
        }
      ]
  },
 {
      dt_txt: "2022-08-30 17:00:00",
      main: {
        temp_min: 296.2,
        temp_max: 296.31,
      },
      weather: [
        {
          main: "Cloudy"
        }
      ]
  },
 {
      dt_txt: "2022-08-30 18:00:00",
      main: {
        temp_min: 292.84,
        temp_max: 294.94,
      },
      weather: [
        {
          main: "Sunny"
        }
      ]
  }
]

// const ListItem = (props) => {
//   const {dt_txt,temp_min,temp_max} = props
//   return (
//       <View style={styles.item}>
//           <Feather name={"sun"} size={50} color={"white"}/>
//           <Text style={styles.date}>{dt_txt}</Text>
//           <Text style={styles.temp}>{temp_min}</Text>
//           <Text style={styles.temp}>{temp_max}</Text>
//       </View>
//   )

// }




const colour = "#71879f"
const UpcommingWeather = () => {
  
  const renderItem = ({item}) => (
    <ListItem
    dt_txt={item.dt_txt} 
    temp_min={item.main.temp_min} 
    temp_max={item.main.temp_max} 
    condition={item.weather[0].main}
  
    />
  )
  const {container,image} =styles
    return (
        <SafeAreaView style={container}>
            <StatusBar
              backgroundColor={colour}
            />
            <ImageBackground
            style={image}
            source={require("../../assets/clouds.jpg")}>
              <Text>Upcomming Weather</Text>
              <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item) => item.dt_txt}
              />
            </ImageBackground>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // marginTop: StatusBar.currentHeight || 0,
        backgroundColor: colour
    },
    image: {
      flex: 1,
    },
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
export default UpcommingWeather