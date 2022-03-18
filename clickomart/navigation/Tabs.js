import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { StyleSheet, Text, View } from 'react-native';
import Home from '../components/Home';
import { NavigationContainer } from '@react-navigation/native';
import Header from '../components/Header';

const Tab = createBottomTabNavigator();

const EmptyScreen = () => {
    return (
        <View></View>
    )
}

function Tabs() {
  return (
    <NavigationContainer
    >
    <Tab.Navigator
             screenOptions={{
                tabBarStyle: { 
                   backgroundColor: 'white',
                   position: 'absolute',
                    borderBottomColor: '#58BD91',
                    height: 75,
                    borderBottomWidth: 15
                },
              }}
            barStyle={{
                
            }}
            initialRouteName="Home"
        >
            <Tab.Screen 
                name="Home"
                component={Home}
                options={{
                   tabBarLabel: "",       
                   //headerShown: false,
                   header: () => <Header />,
                //    headerTitleAlign: 'center',
                   tabBarIcon: ({ color, focused }) => (
                        <Icon size={focused? 30: 26} color={'#58BD91'} name="home" />
                   ),
                   
               }}
            />
            <Tab.Screen 
                name="Fav"
                component={EmptyScreen}
                options={{
                    headerShown: false,
                    tabBarLabel: "",                    
                    tabBarIcon: ({ color, focused }) => (
                         <Icon size={focused? 30: 26} color={'#58BD91'} name="heart" />
                    ),
                    
                }}
            />
            <Tab.Screen 
                name="Cart"
                component={EmptyScreen}
                options={{
                    headerShown: false,
                    tabBarLabel: "",       
                    tabBarIcon: ({ color, focused }) => (
                        <View  style={{
                            backgroundColor: '#58BD91', 
                            width: 60, height: 60,
                            alignItems: 'center',justifyContent: 'center',
                            borderRadius: 60, 
                            position: 'absolute',bottom: 10
                            }}>
                            <Icon size={focused? 30: 26} color={'white'} name="shopping-cart"/>
                        </View>
                    ),
                    
                }}
            />
            <Tab.Screen 
                name="Search"
                component={EmptyScreen}
                options={{
                    tabBarLabel: "",       
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                         <Icon size={focused? 30: 26} color={'#58BD91'} name="search" />
                    ),
                    
                }}
            />
            <Tab.Screen 
                name="Me"
                component={EmptyScreen}
                options={{
                    tabBarLabel: "",       
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                         <Icon size={focused? 30: 26} color={'#58BD91'} name="user" />
                    ),
                    
                }}
            />
        </Tab.Navigator>
        </NavigationContainer>
  )
}

export default Tabs