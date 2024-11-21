import { Tabs, useRouter } from 'expo-router';
import { useEffect } from 'react';
import { StatusBar } from 'react-native';

import { CartIcon } from '~/components/CartIcon';
import { TabsIcon } from '~/components/TabsIcon';
import { colors } from '~/constants';
import { useAuth } from '~/context/AuthContext';

export default function TabsLayout() {

  return (
    // @ts-ignore
    <>
      <StatusBar barStyle="light-content" />
      <Tabs
        screenOptions={{
          tabBarInactiveTintColor: colors.dark,
          tabBarActiveTintColor: colors.yellow,
          headerTintColor: colors.yellow,
          headerStyle: { backgroundColor: colors.dark },
          headerRight: () => <CartIcon />,
          tabBarHideOnKeyboard: true,
        }}>
        <Tabs.Screen
          name="index"
          options={{
            title: '',
            tabBarLabel: 'Home',
            tabBarIcon: ({ focused, size }) => (
              <TabsIcon focused={focused} name="home" size={size} />
            ),
          }}
        />
        {/* <Tabs.Screen
          name="menu"
          options={{
            title: '',
            tabBarLabel: 'Menu',
            tabBarIcon: ({ focused, size }) => (
              <TabsIcon focused={focused} name="bars" size={size} />
            ),
          }}
        />
        <Tabs.Screen
          name="more"
          options={{
            title: '',
            tabBarLabel: 'More',
            tabBarIcon: ({ focused, size }) => (
              <TabsIcon focused={focused} name="amazon" size={size} />
            ),
          }}
        /> */}
        <Tabs.Screen
          name="favourite"
          options={{
            title: '',
            tabBarLabel: 'Favourite',
            tabBarIcon: ({ focused, size }) => (
              <TabsIcon focused={focused} name="hearto" size={size} />
            ),
          }}
        />
        <Tabs.Screen
          name="account"
          options={{
            title: '',
            tabBarLabel: 'Account',
            tabBarIcon: ({ focused, size }) => (
              <TabsIcon focused={focused} name="user" size={size} />
            ),
          }}
        />
      </Tabs>
    </>
  );
}
