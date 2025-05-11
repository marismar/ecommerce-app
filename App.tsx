import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as NavigationBar from 'expo-navigation-bar';
import React from 'react';
import { ActivityIndicator } from 'react-native';
import FlashMessage from 'react-native-flash-message';
import { isAndroid } from './src/helpers/platform_helper';
import MainAppStack from './src/navigation/MainAppStack';
import { AppColors } from './src/styles/colors';

export default function App() {
  if (isAndroid) {
    async function setTranslucentNavigation() {
      try {
        await NavigationBar.setPositionAsync('absolute'); // Enables edge-to-edge mode
        await NavigationBar.setBackgroundColorAsync(AppColors.transparent); // Transparent background
      } catch (error) {
        console.error('Error setting translucent navigation bar:', error);
      }
    }

    setTranslucentNavigation();
  }

  const [fontsLoaded] = useFonts({
    'SF-Pro-Display-Bold': require('./src/assets/fonts/SF-Pro-Display-Bold.otf'),
    'SF-Pro-Display-Medium': require('./src/assets/fonts/SF-Pro-Display-Medium.otf'),
    'SF-Pro-Display-Regular': require('./src/assets/fonts/SF-Pro-Display-Regular.otf'),
  });

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <>
      <NavigationContainer>
        <FlashMessage position="top" floating hideOnPress />
        <MainAppStack />
      </NavigationContainer>
    </>
  );
}
