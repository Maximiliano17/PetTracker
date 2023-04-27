import React from "react";
//Navigation
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
//Screens
import Register from "./screens/Register";
import Login from "./screens/Login";
import Home from "./screens/Home";
//Icons
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Register"
      screenOptions={{
        tabBarActiveTintColor: "green",
      }}
    >
      <Tab.Screen
        name="Register"
        component={Register}
        options={{
          tabBarLabel: "Register",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="account-cancel"
              size={size}
              color={color}
            />
          ),
          headerShown: false,
        }}
      />

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
                headerShown: false,
              }}
            />

      <Tab.Screen
        name="Login"
        component={Login}
        options={{
          tabBarLabel: "Login",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="account-cancel"
              size={size}
              color={color}
            />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
