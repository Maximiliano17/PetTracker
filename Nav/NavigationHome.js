import React from "react";
//Navigation
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
//Screens
import Home from "../screens/Home";

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
          component={Home}
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
  