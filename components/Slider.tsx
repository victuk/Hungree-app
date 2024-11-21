/* eslint-disable prettier/prettier */

import { Image } from 'expo-image';
import Carousel from 'pinar';
import { Dimensions, StyleSheet, View } from 'react-native';
type Props = {
  images: string[];
};

const { height } = Dimensions.get('window');
export const Slider = ({ images }: Props): JSX.Element => {
  return (
    <Carousel
      style={{ height: height * 0.4 }}
      showsDots={false}
      loop
      autoplay
      showsControls={false}>
      {images.map((image) => (
        <View style={styles.imageContainer} key={image}>
          <Image
            style={styles.image}
            contentFit="contain"
            source={{ uri: image }}
            // placeholder={require('~/assets/gig.gif')}
            placeholderContentFit="contain"
          />
        </View>
      ))}
    </Carousel>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    height: height * 0.4,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
