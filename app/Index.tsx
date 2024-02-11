import { View, Text } from 'react-native'
import React from 'react'
import Home from './screens/ui/Home'
import { useFonts } from 'expo-font';
import BottomTabs from './navigation/BottomTabs';
import { NavigationContainer } from '@react-navigation/native';

const Index = () => {
  const [fontsLoaded] = useFonts({
    'lx-l': require('./shared/assets/fonts/Lexend-Light.ttf'),
    'lx-m': require('./shared/assets/fonts/Lexend-Medium.ttf'),
    'lx-r': require('./shared/assets/fonts/Lexend-Regular.ttf'),
  });
  return (
    <NavigationContainer>
      <BottomTabs/>
    </NavigationContainer>
  )
}

export default Index