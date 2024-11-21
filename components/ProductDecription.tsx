/* eslint-disable prettier/prettier */

import { StyleSheet, Text, View } from 'react-native';

import { Divider } from './Divider';
import { RenderStars } from './RenderStars';

type Props = {
  description: string;
  price: number;
  stock: number;
  discountPercentage: number;
  rating: number;
  category: string;
  brand: string;
  title: string;
  numberOfReviews: number;
};

export const ProductInfo = ({
  brand,
  category,
  description,
  discountPercentage,
  price,
  rating,
  stock,
  title,
  numberOfReviews,
}: Props): JSX.Element => {
  // to check percentage discount
  const newPriceBasedOnDiscountPercentage = (price * (100 - discountPercentage)) / 100;
  // to make the discount have two decimal places
  const priceWithDiscount = newPriceBasedOnDiscountPercentage.toFixed(2);
  // to check if there is discount
  const thereIsDiscount = discountPercentage > 0;
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <Text>Brand: {brand}</Text>
      <Text>Category: {category}</Text>
      <View style={{ flexDirection: 'row' }}>
        <RenderStars rating={rating} />
        <Text> ({numberOfReviews} ratings) </Text>
      </View>
      <Text>Available in stock: {stock}</Text>
      <Text
        style={{
          textDecorationLine: thereIsDiscount ? 'line-through' : 'none',
          fontWeight: 'bold',
          color: '#ccc',
        }}>
        ₦{price}
      </Text>
      {thereIsDiscount && <Text style={{ fontWeight: 'bold' }}>₦{priceWithDiscount}</Text>}
      <Divider />
      <Text>Description</Text>
      <Text>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 5,
    marginBottom: 10,
  },
});
