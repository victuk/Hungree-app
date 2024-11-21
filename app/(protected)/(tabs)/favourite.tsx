import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import FavouriteItem from '~/components/FavouriteItem';
import { Wrapper } from '~/components/ui/Wrapper';
import { useFavouriteStoreStore } from '~/lib/zustand/cart';

const FavouritePage = () => {

  const favouriteItems = useFavouriteStoreStore(state => state.favourites);

  return (
    <Wrapper>
      <FlatList
        data={favouriteItems}
        style={{marginVertical: 20}}
        renderItem={({item}) => <FavouriteItem item={item} />}
        ListEmptyComponent={() => <View style={styles.noProductContainer}>
          <AntDesign name='shoppingcart' size={50} />
          <Text style={{fontWeight: "bold", fontSize: 20}}>No product in favourite</Text>
        </View>}
      />
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  noProductContainer: {
    height: 200,
    justifyContent: "center",
    alignItems: "center"
    // backgroundColor: "black"
  }
});

export default FavouritePage;
