import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack, useRouter } from 'expo-router';
import { useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { toast, Toaster } from 'sonner-native';
import { TamaguiProvider } from 'tamagui';
import { useNetInfo } from "@react-native-community/netinfo";

import config from '../tamagui.config';
import NetworkBanner from '~/components/NetworkBanner';

const queryClient = new QueryClient();

SplashScreen.preventAutoHideAsync();
export default function Layout() {
  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  });

  const netInfo = useNetInfo();

  const isConnected = netInfo.isInternetReachable;


  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  
  useEffect(() => {
    if(isConnected) {
      toast.success("Connected");
    } else {
      toast.error("Disconnected");
    }
  }, [isConnected]);
  
  if (!loaded) return null;

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <TamaguiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <Toaster />
          <Stack
            screenOptions={{
              headerShown: false,
            }}
            />
            {!isConnected && <NetworkBanner />}
        </QueryClientProvider>
      </TamaguiProvider>
    </GestureHandlerRootView>
  );
}
