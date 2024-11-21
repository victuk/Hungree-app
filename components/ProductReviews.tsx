/* eslint-disable prettier/prettier */

import { StyleSheet, Text, View } from 'react-native';

import { Reviews } from './Reviews';

import { colors } from '~/constants';
import { Review } from '~/type';

type Props = {
  reviews: Review[];
  rating: number;
};

export const ProductReviews = ({ reviews, rating }: Props): JSX.Element => {
  return (
    <View>
      <Text style={styles.title}>Product Ratings & Reviews</Text>
      <View style={styles.ratingOuterContainer}>
        <View style={styles.ratingContainer}>
          <Text style={{ color: colors.yellow }}>{rating}/5</Text>
        </View>
        <Text>({reviews.length} ratings)</Text>
      </View>

      <Reviews reviews={reviews} />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  ratingOuterContainer: { flexDirection: 'row', gap: 2, alignItems: 'center', marginBottom: 5 },
  ratingContainer: {
    padding: 2,
    borderColor: colors.yellow,
    borderWidth: 1,
  },
});
