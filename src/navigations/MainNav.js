import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack'


import HomeScreen from '../screens/HomeScreen';
import TicketScreen from '../screens/TicketScreen';
import SettingScreen from '../screens/ProfileScreens/SettingScreen';

import { theme_green } from '../constants/constants';
import DetailScreen from '../screens/DetailScreen';
import BookingScreen from '../screens/BookingScreen';
import SearchScreen from '../screens/SearchScreen';
import MapScreen from '../screens/MapScreen';
import ProfileScreen from '../screens/ProfileScreens/ProfileScreen';
import NotificationSettings from '../screens/ProfileScreens/NotificationSettings';
import WalletSettings from '../screens/ProfileScreens/WalletSettings';

const HomeStack = createStackNavigator()
const HomePage = () => {
  return(
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name='HomeScreen' component={HomeScreen}  />
      <HomeStack.Screen name='SearchScreen' component={SearchScreen}  />
      <HomeStack.Screen name='MapScreen' component={MapScreen}  />
      <HomeStack.Screen name='DetailScreen' component={DetailScreen}  />
      <HomeStack.Screen name='BookingScreen' component={BookingScreen}  />
    </HomeStack.Navigator>
  )
}

const ProfileStack = createStackNavigator()
const ProfilePage = () => {
  return (
    <ProfileStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name='ProfileScreen' component={ProfileScreen} />
      <HomeStack.Screen name='NotificationSettings' component={NotificationSettings} />
      <HomeStack.Screen name='WalletSettings' component={WalletSettings} />
    </ProfileStack.Navigator>
    // WalletSettings
  )
}




const Tab = createBottomTabNavigator();

/*
const Tab = createBottomTabna()

const tabing = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="home" component={Home} />
        </tab.Navigator>
    )
}
*/


export const MainNav = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: theme_green,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Ticket"
        component={TicketScreen}
        options={{
          tabBarLabel: 'Tickets',
          tabBarIcon: ({ color, size }) => (
            <Feather name="bookmark" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfilePage}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <Feather name="user" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}