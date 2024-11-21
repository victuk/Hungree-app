import { Redirect, Stack, useRouter } from 'expo-router';
import React from 'react';
import { Pressable, Text } from 'react-native';
import { useUserStore } from '~/lib/zustand/auth';

const UnprotectedLayout = () => {

  const router = useRouter();

  const user = useUserStore((state) => state.user);

    if(user?.token) {
        return <Redirect href={"/"} />
    }

  const onPress = () => {
    router.back();
  };
  return (
    <Stack
      screenOptions={{
        // headerShadowVisible: true,
        title: 'Amazon.sg',
        headerTitleAlign: 'center',
        headerLeft: () => ( router.canGoBack() &&
          <Pressable onPress={onPress} style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1 })}>
            <Text>Cancel</Text>
          </Pressable>
        ),
      }}
    >
      <Stack.Screen name='login' options={{
        title: "Login"
      }} />
      <Stack.Screen name='register' options={{
        title: "Register"
      }} />
    </Stack>
  );
};

export default UnprotectedLayout;
