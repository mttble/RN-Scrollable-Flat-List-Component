import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ScrollableFlatListComponent from './components/ScrollableFlatListComponent'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'

const Tab = createBottomTabNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}>

        <Tab.Screen name="HOME" component={ScrollableFlatListComponent} options={{
          tabBarIcon: ({size, focused, color}) => {
            return <Entypo name={"home"} size={size} color={color}/>
          }
        }}/>

        <Tab.Screen name="REORDER" component={ScrollableFlatListComponent} options={{
          tabBarIcon: ({size, color}) => {
            return <MaterialIcons name={"reorder"} size={size} color={color}/>
          }
        }}/>

        <Tab.Screen name="CART" component={ScrollableFlatListComponent} options={{
          tabBarIcon: ({size, color}) => {
            return <MaterialCommunityIcons name={"cart"} size={size} color={color}/>
          }
        }}/>

        <Tab.Screen name="ACCOUNT" component={ScrollableFlatListComponent} options={{
          tabBarIcon: ({size, color}) => {
            return <FontAwesome6 name={"user"} size={size} color={color}/>
          }
        }}/>

      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})