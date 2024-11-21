/* eslint-disable prettier/prettier */

import { FlatList, View } from 'react-native';

import { Divider } from './Divider';
import { ProductInfo } from './ProductDecription';
import { ProductReviews } from './ProductReviews';
import { SimilarProducts } from './SimiliarProducts';
import { Slider } from './Slider';

import { ProductResponse } from '~/type';

type Props = {
  product: ProductResponse;
  similar: ProductResponse[];
};

export const ProductDetail = ({ product, similar }: Props): JSX.Element => {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 100 }}
      ListHeaderComponent={() => (
        <View style={{ flex: 1 }}>
          <Slider images={product.images} />
          <Divider />
          {/* product into */}
          <ProductInfo
            brand={product.brand}
            category={product.category}
            description={product.description}
            discountPercentage={product.discountPercentage}
            price={product.price}
            rating={product.rating}
            stock={product.stock}
            title={product.title}
            numberOfReviews={product.reviews.length}
          />
          {/* product ratings and reviews */}
          <Divider />
          <ProductReviews reviews={product.reviews} rating={product.rating} />
        </View>
      )}
      data={[]}
      renderItem={() => null}
      ListFooterComponent={() => <SimilarProducts product={similar} />}
    />
  );
};
