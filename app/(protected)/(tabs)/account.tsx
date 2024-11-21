import { Image } from 'expo-image';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import SkeletonLoader from '~/components/SkeletonLoader';
import { CustomButton } from '~/components/ui/CustomButton';
import { colors } from '~/constants';
import { useUserStore } from '~/lib/zustand/auth';

const account = () => {

  const user = useUserStore(state => state.user);
  const logOut = useUserStore(state => state.removeUser);


  return (
    <View style={{justifyContent: "center", alignItems: "center", gap: 20, paddingTop: 40, padding: 20, backgroundColor: "white"}}>
      <Image source={require('~/assets/avatar.png')} style={{borderRadius: 50, height: 100, width: 100}} />
      <Text style={{fontWeight: "bold", fontSize: 25}}>{user?.fullName}</Text>
      <Text>{user?.email}</Text>
      <Pressable onPress={logOut} style={styles.logoutButton}><Text style={styles.logoutTextButton}>Log Out</Text></Pressable>
      {/* <SkeletonLoader /> */}
    </View>
  );
};


const styles = StyleSheet.create({
  logoutButton: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    backgroundColor: colors.yellow,
    borderRadius: 10
  },
  logoutTextButton: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20
  }
});

export default account;
