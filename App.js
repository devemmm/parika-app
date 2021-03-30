import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { LoginPages, MainNav } from './src/navigations/MainNav';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(true)
  
  return (
    <NavigationContainer>
      {
        isLoggedIn ?
        <MainNav/> :
        <LoginPages/>
      }
    </NavigationContainer>
  );
}
