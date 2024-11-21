/* eslint-disable prettier/prettier */

import { FontAwesome } from '@expo/vector-icons';
import { View } from 'react-native';

type Props = {
  rating: number;
};

export const RenderStars = ({ rating }: Props): JSX.Element => {
  // Convert rating to number and ensure it's between 0-5
  const normalizedRating = Math.min(5, Math.max(0, Number(rating)));

  const renderStar = (position: number) => {
    const difference = normalizedRating - position;

    // Determine star type based on difference
    if (difference >= 1) {
      return 'star'; // full star
    } else if (difference > 0) {
      return 'star-half-o'; // half star
    }
    return 'star-o'; // empty star
  };
  return (
    <View style={{ flexDirection: 'row' }}>
      {[0, 1, 2, 3, 4].map((position) => (
        <FontAwesome
          key={position}
          name={renderStar(position)}
          size={20}
          color="gold"
          style={{ marginRight: position < 4 ? 2 : 0 }}
        />
      ))}
    </View>
  );
};
