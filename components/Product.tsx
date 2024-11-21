/* eslint-disable prettier/prettier */
import { FlashList } from '@shopify/flash-list';
import { View } from 'react-native';

import { ProductCard } from './ProductCard';

import { ProductResponse } from '~/type';

type Props = {
  data: ProductResponse[];
};

export const Product = ({ data }: Props): JSX.Element => {
  return (
    <View style={{ flex: 1, marginTop: 20 }}>
      <FlashList
        data={data}
        estimatedItemSize={200}
        renderItem={({ item, index }) => <ProductCard product={item} index={index} />}
        showsVerticalScrollIndicator={false}
        // numColumns={2}
        contentContainerStyle={{ paddingVertical: 10, paddingHorizontal: 5 }}
      />
    </View>
  );
};
