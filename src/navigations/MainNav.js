import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack'


import HomeScreen from '../screens/HomeScreen';
import TicketScreen from '../screens/TicketScreens/TicketScreen';
import SettingScreen from '../screens/ProfileScreens/SettingScreen';

import { theme_green } from '../constants/constants';
import DetailScreen from '../screens/DetailScreen';
import BookingScreen from '../screens/BookingScreen';
import SearchScreen from '../screens/SearchScreen';
import MapScreen from '../screens/MapScreen';
import ProfileScreen from '../screens/ProfileScreens/ProfileScreen';
import NotificationSettings from '../screens/ProfileScreens/NotificationSettings';
import WalletSettings from '../screens/ProfileScreens/WalletSettings';
import EditProfile from '../screens/ProfileScreens/EditProfile';
import PasswordReset from '../screens/ProfileScreens/PasswordReset';
import PasswordNew from '../screens/ProfileScreens/PasswordNew';
import LoginScreen from '../screens/LoginScreens/LoginScreen';
import SignUpScreen from '../screens/LoginScreens/SignUpScreen';
import ForgotPassword from '../screens/LoginScreens/ForgotPassword';
import VerifyPhone from '../screens/LoginScreens/VerifyPhone';
import ProvidePhone from '../screens/LoginScreens/ProvidePhone';
import WelcomeScreen from '../screens/LoginScreens/WelcomeScreen';
import HelpScreen from '../screens/ProfileScreens/HelpScreen';
import AboutScreen from '../screens/ProfileScreens/AboutScreen';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import ConfirmPassword from '../components/ConfirmPassword';
import WalletRecharge from '../screens/ProfileScreens/WalletRecharge';

const HomeStack = createStackNavigator()
const HomePage = () => {
  return(
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name='HomeScreen' component={HomeScreen}  />
      <HomeStack.Screen name='SearchScreen' component={SearchScreen}  />
      <HomeStack.Screen name='MapScreen' component={MapScreen}  />
      <HomeStack.Screen name='DetailScreen' component={DetailScreen}  />
      <HomeStack.Screen name='BookingScreen' component={BookingScreen}  />
      <HomeStack.Screen name='ConfirmPassword' component={ConfirmPassword}  />
    </HomeStack.Navigator>
  )
}

const TicketStack = createStackNavigator()
const TicketPage = () => {
  return (
    <TicketStack.Navigator screenOptions={{ headerShown: false }}>
      <TicketStack.Screen name='TicketScreen' component={TicketScreen} />
      <TicketStack.Screen name='ConfirmPassword' component={ConfirmPassword} />
    </TicketStack.Navigator>
  )
}

const ProfileStack = createStackNavigator()
const ProfilePage = () => {
  return (
    <ProfileStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name='ProfileScreen' component={ProfileScreen} />
      <HomeStack.Screen name='NotificationSettings' component={NotificationSettings} />
      <HomeStack.Screen name='WalletSettings' component={WalletSettings} />
      <HomeStack.Screen name='WalletRecharge' component={WalletRecharge} />
      <HomeStack.Screen name='SettingScreen' component={SettingScreen} />
      <HomeStack.Screen name='EditProfile' component={EditProfile} />
      <HomeStack.Screen name='PasswordReset' component={PasswordReset} />
      <HomeStack.Screen name='PasswordNew' component={PasswordNew} />
      <HomeStack.Screen name='HelpScreen' component={HelpScreen} />
      <HomeStack.Screen name='AboutScreen' component={AboutScreen} />
    </ProfileStack.Navigator>
  )
}

// Hide bottom navigation
const setTabBarVisible = (route) => {
  const routeName = getFocusedRouteNameFromRoute(route);
  const hideOnScreens = [
    'EditProfile',
    'DetailScreen',
    'BookingScreen',
    'SearchScreen',
    'NotificationSettings',
    'WalletSettings',
    'HelpScreen',
    'AboutScreen',
    'MapScreen',
    'ConfirmPassword'
    
  ];
  if (hideOnScreens.indexOf(routeName) > -1) return false;
  return true;
}


const Tab = createBottomTabNavigator();

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
        options={({ route }) => ({
          tabBarLabel: 'Home',
          tabBarVisible: setTabBarVisible(route),
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" size={size} color={color} />
          ),
        })}
      />
      <Tab.Screen
        name="Ticket"
        component={TicketPage}
        options={({ route }) => ({
          tabBarLabel: 'Tickets',
          tabBarVisible: setTabBarVisible(route),
          tabBarIcon: ({ color, size }) => (
            <Feather name="bookmark" size={size} color={color} />
          ),
        })}
      />
      <Tab.Screen
        name="Profile"
        component={ProfilePage}
        options={({ route }) => ({
          tabBarLabel: 'Profile',
          tabBarVisible: setTabBarVisible(route),
          tabBarIcon: ({ color, size }) => (
            <Feather name="user" size={size} color={color} />
          ),
        })}
      />
    </Tab.Navigator>
  );
}

const LoginStack = createStackNavigator()
export const LoginPages = () => {
  return (
    <LoginStack.Navigator initialRouteName='WelcomeScreen' screenOptions={{ headerShown: false }} >
      <LoginStack.Screen name='WelcomeScreen' component={WelcomeScreen} />
      <LoginStack.Screen name='LoginScreen' component={LoginScreen} />
      <LoginStack.Screen name='SignUpScreen' component={SignUpScreen} />
      <LoginStack.Screen name='ForgotPassword' component={ForgotPassword} />
      <LoginStack.Screen name='ProvidePhone' component={ProvidePhone} />
      <LoginStack.Screen name='VerifyPhone' component={VerifyPhone} />
    </LoginStack.Navigator>
  )
}