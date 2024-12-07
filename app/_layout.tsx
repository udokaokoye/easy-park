import { DarkTheme, DefaultTheme, NavigationContainer, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Slot, Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import 'react-native-reanimated';
import React from 'react';

import { useColorScheme } from '@/hooks/useColorScheme';
import Onboarding from './(auth)/onboarding';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Linking } from 'react-native';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {

  const [userAuthenticated, setuserAuthenticated] = useState(false)
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  const [isReady, setIsReady] = useState(false);
  const [initialState, setInitialState] = useState();

  // useEffect(() => {
  //   const restoreState = async () => {
  //     try {
  //       const savedState = await AsyncStorage.getItem('NAVIGATION_STATE');
  //       if (savedState) {
  //         setInitialState(JSON.parse(savedState));
  //       }
  //     } finally {
  //       setIsReady(true);
  //     }
  //   };

  //   restoreState();
  // }, []);

  // React.useEffect(() => {
  //   const restoreState = async () => {
  //     try {
  //       const initialUrl = await Linking.getInitialURL();

  //       if (initialUrl == null) {
  //         // Only restore state if there's no deep link
  //         const savedStateString = await AsyncStorage.getItem('PERSISTENCE_KEY');
  //         const state = savedStateString
  //           ? JSON.parse(savedStateString)
  //           : undefined;

  //         if (state !== undefined) {
  //           setInitialState(state);
  //         }
  //       }
  //     } finally {
  //       setIsReady(true);
  //     }
  //   };

  //   if (!isReady) {
  //     restoreState();
  //   }
  // }, [isReady]);

  // if (!isReady) {
  //   return null;
  // }

  // if (!loaded) {
  //   return  <Slot />;
  // }
  // if (!isReady) {
  //   return <Slot />; // You can show a loading screen here
  // }



  return (
    // <NavigationContainer initialState={initialState} independent onStateChange={(navState) => {
    //   AsyncStorage.setItem('NAVIGATION_STATE', JSON.stringify(navState))
    // }}>
    <NavigationContainer
      // initialState={initialState}
      // onStateChange={(state) =>
      //   AsyncStorage.setItem('PERSISTENCE_KEY', JSON.stringify(state))
      // }
      // independent
    >
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>


      <Stack>

        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(main)" options={{ headerShown: false }} />
        <Stack.Screen name="park" options={{ headerShown: false }} />
        
      </Stack>
    </ThemeProvider>
      </NavigationContainer>
  );
}