import React from "react"
import CurrentWeather from "./src/screens/CurrentWeather"
import UpcommingWeather from "./src/screens/UpcommingWeather"
import City from "./src/screens/City"
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"


const Tab = createBottomTabNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor:"tomato",
        tabBarInactiveTintColor:"grey"
      }}
      >
        <Tab.Screen name={"Current"} component={CurrentWeather} />
        <Tab.Screen name={"Upcomming"} component={UpcommingWeather} />
        <Tab.Screen name={"City"} component={City} /> 
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App