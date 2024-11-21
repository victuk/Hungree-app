/* eslint-disable prettier/prettier */

import { FlatList } from 'react-native';

import { Divider } from './Divider';
import { SingleReview } from './SingleReview';

import { Review } from '~/type';

type Props = {
  reviews: Review[];
};

export const Reviews = ({ reviews }: Props): JSX.Element => {
  return (
    <FlatList
      data={reviews}
      ListHeaderComponent={() => <Divider />}
      renderItem={({ item }) => <SingleReview review={item} />}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ gap: 10 }}
      keyExtractor={(_, index) => index.toString()}
      ItemSeparatorComponent={() => <Divider />}
      ListFooterComponent={() => <Divider />}
    />
  );
};
