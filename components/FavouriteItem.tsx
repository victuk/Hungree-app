import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { Favourite } from '~/type'
import { Image } from 'expo-image'
import { colors } from '~/constants'
import { useFavouriteStoreStore } from '~/lib/zustand/cart'
import { trimText } from '~/utils'
import { AntDesign } from '@expo/vector-icons'
import { useRouter } from 'expo-router'

type Props = {
  item: Favourite
}

export default function FavouriteItem({item}: Props) {

  const router = useRouter();

  const removeFromFavourite = useFavouriteStoreStore(state => state.addOrRemove);

  return (
    <View style={styles.container}>
      <Pressable onPress={() => {router.push(`/product/${item.id}`)}}>
      <View style={{flexDirection: "row", alignItems: "center"}}>
        <View>
          <Image
            source={{uri: item.img}}
            style={{height: 100, width: 100}}
          />
        </View>
        <View>
          <Text style={{fontWeight: "bold", fontSize: 15, marginBottom: 10}}>{trimText(item.title, 18)}</Text>
          <Text>${item.price}</Text>
        </View>
      </View>
      </Pressable>
      <Pressable onPress={() => {removeFromFavourite(item)}}><Text style={{color: colors.yellow}}><AntDesign name='close' size={25} /></Text></Pressable>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 10,
    width: "100%",
    borderWidth: 1,
    borderColor: colors.gray,
    padding: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10
  }
});
