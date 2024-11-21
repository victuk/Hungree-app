/* eslint-disable prettier/prettier */

import { StyleSheet, Text, View } from 'react-native';

import { RenderStars } from './RenderStars';

import { colors } from '~/constants';
import { Review } from '~/type';

type Props = {
  review: Review;
};

export const SingleReview = ({ review }: Props): JSX.Element => {
  return (
    <View style={{ gap: 10 }}>
      <View style={styles.top}>
        <RenderStars rating={review.rating} />
        <Text>{review.date.split('T')[0]}</Text>
      </View>
      <Text>{review.comment}</Text>
      <Text style={styles.name}>By {review.reviewerName}</Text>
      <Text style={styles.name}>Email: {review.reviewerEmail}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    fontSize: 13,
    fontWeight: '400',
    color: colors.gray,
  },
});
