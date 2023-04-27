import React from "react";
//Navigation
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
//Screens
import Home from "../screens/Home";
import Mystack from "../screens/StackScreen";

const HomeStackNavigator = createNativeStackNavigator();

function MyHome() {
  return(
    <HomeStackNavigator.Navigator
     initialRouteName="homeScreen"
    >
      <HomeStackNavigator.Screen 
        name="homeScreen"
        component={Home}
      />

     <HomeStackNavigator.Screen 
        name="home"
        component={Mystack}
      /> 
        
    </HomeStackNavigator.Navigator>
  )
}


const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarActiveTintColor: "green",
        }}
      >
        <Tab.Screen
          name="Home"
          component={MyHome}
          options={{ 
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="account-cancel"
                size={size}
                color={color}
              />
            ),
           
          }}
        />
      </Tab.Navigator>
    );
  }
  
  export default function NavigationHome() {
    return (
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    );
  }
  