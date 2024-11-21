/* eslint-disable prettier/prettier */

import { AntDesign } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { CartItem } from './CartItem';
import { Divider } from './Divider';
import { CustomButton } from './ui/CustomButton';

import { colors } from '~/constants';
import { useCartStore } from '~/lib/zustand/cart';

export const Cart = (): JSX.Element => {
  const cartItems = useCartStore((state) => state.items);
  const totalItems = cartItems.length;
  const subtotal = cartItems.reduce((acc, curr) => acc + curr.price * curr.qty, 0);

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        style={{ flex: 1 }}
        ListHeaderComponent={() => <ListHeader totalItems={totalItems} subTotal={subtotal} />}
        ListFooterComponent={() => <ListFooter subtotal={subtotal} />}
        data={cartItems}
        renderItem={({ item }) => <CartItem item={item} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ gap: 10, flexGrow: 1, paddingHorizontal: 10 }}
        ListEmptyComponent={EmptyComponent}
        ListFooterComponentStyle={{ marginTop: 'auto', marginBottom: 30 }}
      />
    </View>
  );
};
type HeaderProp = {
  totalItems: number;
  subTotal: number;
};

const ListHeader = ({ totalItems, subTotal }: HeaderProp) => {
  return (
    <View style={{ marginTop: 20, gap: 10 }}>
      <Text style={styles.summary}>CART SUMMARY</Text>
      <Divider />
      <View style={styles.subtotal}>
        <Text>Subtotal</Text>
        <Text style={styles.subtotalAmount}>₦{subTotal}</Text>
      </View>
      <Text style={styles.summary}>Cart ({totalItems})</Text>
      <Divider />
    </View>
  );
};

const ListFooter = ({ subtotal }: { subtotal: number }) => {
  return (
    <View style={{ flexDirection: 'row', gap: 20 }}>
      <TouchableOpacity style={styles.iconContainer}>
        <AntDesign name="phone" size={30} color={colors.yellow} />
      </TouchableOpacity>
      <CustomButton
        buttonTitle={`Checkout (₦${subtotal})`}
        onPress={() => {}}
        color="white"
        style={{ flex: 1 }}
      />
    </View>
  );
};

const EmptyComponent = () => {
  const router = useRouter();
  const onPress = () => router.push('/');
  return (
    <View style={{ gap: 10 }}>
      <Text style={styles.title}>No items in cart</Text>
      <CustomButton buttonTitle="Continue shopping" color="white" onPress={onPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  subtotal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  subtotalAmount: {
    fontWeight: 'bold',
  },
  summary: { fontWeight: '300', color: 'grey' },
  title: { fontSize: 25, fontWeight: 'bold', color: 'black', textAlign: 'center' },
  iconContainer: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.yellow,
    padding: 10,
  },
});
