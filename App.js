import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppNav } from './src/navigations/MainNav';

export default function App() {
  return (
    <NavigationContainer>
      <AppNav/>
    </NavigationContainer>
  );
}
