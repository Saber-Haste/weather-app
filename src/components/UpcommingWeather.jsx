import React from "react"
import { View,StyleSheet,SafeAreaView,Text,FlatList } from "react-native" 
import Feather from "react-native-vector-icons/Feather"
import { StatusBar } from "react-native"
import { Image,ImageBackground } from "react-native"


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


// eslint-disable-next-line react/prop-types
const Item = ({dt_txt,temp_min,temp_max,condition}) => {
    return (
        <View style={styles.item}>
            <Feather name={"sun"} size={50} color={"white"}/>
            <Text style={styles.date}>{dt_txt}</Text>
            <Text style={styles.temp}>{temp_min}</Text>
            <Text style={styles.temp}>{temp_max}</Text>
        </View>
    )

}



const colour = "#71879f"
const UpcommingWeather = () => {
  
  const renderItem = ({item}) => (
    <Item
    dt_txt={item.dt_txt} 
    temp_min={item.main.temp_min} 
    temp_max={item.main.temp_max} 
    condition={item.weather[0].main}
  
    />
  )
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
              backgroundColor={colour}
            />
            <ImageBackground
            style={styles.image}
            source={require("../../assets/clouds.jpg")}>
              <Text>Upcomming Weather</Text>
              <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item) => {item.dt_txt}}
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
    item: {
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      justifyContent: "space-around",
      flexDirection: "row",
      alignItems: "center",
      borderWidth: 5,
      backgroundColor: "pink",


    },
    date : {
      color: "white",
      fontSize: 15,
    },
    temp : {
      color: "white",
      fontSize: 18
    },
    image: {
      flex: 1
    }
})
export default UpcommingWeather