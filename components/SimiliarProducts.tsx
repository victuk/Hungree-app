/* eslint-disable prettier/prettier */

import { FlatList, Text, useWindowDimensions, View } from 'react-native';

import { ProductCard } from './ProductCard';

import { ProductResponse } from '~/type';

type Props = {
  product: ProductResponse[];
};

export const SimilarProducts = ({ product }: Props): JSX.Element => {
  console.log(JSON.stringify(product, null, 2), product.length);
  const { width } = useWindowDimensions();
  return (
    <View style={{ marginTop: 20, gap: 20 }}>
      <Text>You might also like</Text>
      <FlatList
        horizontal
        data={product}
        renderItem={({ item }) => <ProductCard product={item} width={width * 0.5} height={300} />}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};
