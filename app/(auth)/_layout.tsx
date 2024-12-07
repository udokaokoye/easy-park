import { NavigationContainer } from "@react-navigation/native";
import { Slot, Stack, useRootNavigationState, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";

export default function Layout() {
  const [onBoardingComplete, setOnBoardingComplete] = useState(false);

  // const navigationState = useRootNavigationState();
  // const router = useRouter();
  // const navigatorReady = navigationState?.key != null
  // useEffect(() => {
  //   if (!navigationState?.key) return;
  //     router.navigate('/onboarding'); // Use lowercase if the file is `onboarding.tsx`
    
  // }, [navigatorReady]);

  return (
    // <NavigationContainer independent>

    <Stack>
        <Stack.Screen name="onboarding" options={{ headerShown: false }} />
        <Stack.Screen name="signup" options={{ headerShown: false }} />
        <Stack.Screen name="login" options={{ headerShown: false }} />
        <Stack.Screen name="index" redirect options={{ headerShown: false }} />

        {/* <Stack.Screen name="+not-found" /> */}
      </Stack>
    // </NavigationContainer>
  );
}
