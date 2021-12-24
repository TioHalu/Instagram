import React from 'react';
import {
    View,
    Text
} from 'react-native';

import Ionic from "react-native-vector-icons/Ionicons";
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Home from './src/components/screen/Home';
import Search from './src/components/screen/Search';
import Reels from './src/components/screen/Reels';
import Profile from './src/components/screen/Profile';
import Shop from './src/components/screen/Shop';

const App = () => {

    const Stack = createNativeStackNavigator();
    const Tab = createBottomTabNavigator();

    const bottomTabSceen = () => {
        return(
            <Tab.Navigator
            screenOptions={({route}) => ({
                tabBarHideOnKeyboard:true,
                tabBarShowLabel:false,
                headerShown:false,
                tabBarStyle: {
                    height: 60,
                    
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
                tabBarIcon: ({focused, size, colour}) => {
                    let iconName;
                    if(route.name === "Home"){
                        iconName=focused ? "home-sharp" : "home-outline";
                        size = focused ? size + 8 : size + 2;
                        colour = 'black';
                    } else if (route.name === "Search"){
                        iconName = focused ? "search" : "ios-search-outline";
                        size = focused ? size + 8 : size + 2;
                        colour = 'black';
                    } else if (route.name === "Reels"){
                        iconName = focused ? "caret-forward-circle" : "caret-forward-circle-outline";
                        size = focused ? size + 8 : size + 2;
                        colour = 'black';
                    } else if (route.name === "Shop"){
                        iconName = focused ? "pricetags" : "pricetags-outline";
                        size = focused ? size + 8 : size + 2;
                        colour = 'black';
                    } else if (route.name === "Profile"){
                        iconName = focused ? "ios-person-circle" : "ios-person-outline";
                        size = focused ? size + 8 : size + 2;
                        colour = 'black';
                    }

                    return <Ionic name = {iconName} size ={size} color={colour}/>
                },
               
            })}>
                <Tab.Screen name = "Home" component = {Home}/>
                <Tab.Screen name = "Search" component = {Search}/>
                <Tab.Screen name = "Reels" component = {Reels}/>
                <Tab.Screen name = "Shop" component = {Shop}/>
                <Tab.Screen name = "Profile" component = {Profile}/>  

            </Tab.Navigator>
        )
    }

    return ( 
        <NavigationContainer>
            <Stack.Navigator screenOptions = {{
                    headerShown:false
                }}>
                <Stack.Screen name = "Bottom" component={bottomTabSceen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;