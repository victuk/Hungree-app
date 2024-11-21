/* eslint-disable prettier/prettier */

import { Image } from 'expo-image';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { UpdateButtons } from './ui/UpdateButtons';

import { colors } from '~/constants';
import { useCartStore } from '~/lib/zustand/cart';
import { CartItem as CartItemType } from '~/type';
import { toast } from 'sonner-native';
import { trimText } from '~/utils';

type Props = {
  item: CartItemType;
};

export const CartItem = ({ item }: Props): JSX.Element => {
  return (
    <View style={styles.outerContainer}>
      <View style={styles.container}>
        <View style={styles.left}>
          <Image
            style={{ width: 100, height: 100 }}
            source={item.img}
            contentFit="cover"
            placeholder={require('~/assets/gig.gif')}
            placeholderContentFit="cover"
          />
        </View>
        <View style={styles.right}>
          <Text>{trimText(item.title, 20)}</Text>
          <Text>₦{item.price}</Text>
          <Text>Brand: {item.brand}</Text>
          <Text>{item.stock} in stock</Text>
        </View>
      </View>
      <Controls item={item} />
    </View>
  );
};

const Controls = ({ item }: { item: CartItemType }) => {
  const increase = useCartStore((state) => state.addItem);
  const decrease = useCartStore((state) => state.removeItem);
  const deleteFromCart = useCartStore((state) => state.deleteFromCart);
  const onIncrease = () => {
    toast.success('Cart has been updated');
    increase(item);
  };
  const onDecrease = () => {
    toast.success('Cart has been updated');
    decrease(item.id);
  };
  const disableIncrease = item.qty === item.stock;
  const disableDecrease = item.qty === 1;
  return (
    <View style={styles.controls}>
      <TouchableOpacity onPress={() => deleteFromCart(item.id)}>
        <Text style={styles.remove}>Remove</Text>
      </TouchableOpacity>
      <UpdateButtons
        qtyInCart={item.qty}
        disableIncrease={disableIncrease}
        disableDecrease={disableDecrease}
        onIncrease={onIncrease}
        onDecrease={onDecrease}
        small
      />
    </View>
  );
};

const styles = StyleSheet.create({
  left: {
    padding: 3,
  },
  right: {
    gap: 10,
  },
  container: { flexDirection: 'row', gap: 10 },
  controls: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  remove: {
    color: colors.yellow,
  },
  outerContainer: {
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
  },
});
