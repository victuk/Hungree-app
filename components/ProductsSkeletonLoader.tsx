import React from 'react';
import { View, StyleSheet, Animated, Easing } from 'react-native';

const ProductsSkeletonLoader = () => {
  const colorAnimation = new Animated.Value(0);

  // Start the color animation
  React.useEffect(() => {
    const startColorAnimation = () => {
      colorAnimation.setValue(0);
      Animated.loop(
        Animated.timing(colorAnimation, {
          toValue: 1,
          duration: 1500,
          easing: Easing.linear,
          useNativeDriver: false, // Use false since we're animating color
        }),
      ).start();
    };

    startColorAnimation();
  }, [colorAnimation]);

  // Interpolate the color from white to grey
  const backgroundColor = colorAnimation.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ['#eeeeee', '#e0e0e0', '#eeeeee'],
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.text, { backgroundColor, width: "100%", height: 40 }]} />
      <Animated.View style={[styles.image, { backgroundColor }]} />
      <View style={styles.textContainer}>
        <Animated.View style={[styles.text, { backgroundColor, width: "40%" }]} />
        <Animated.View style={[styles.text, { backgroundColor, width: "60%" }]} />
        <Animated.View style={[styles.text, { backgroundColor, width: "20%" }]} />
      </View>
      <Animated.View style={[styles.image, { backgroundColor }]} />
      <View style={styles.textContainer}>
        <Animated.View style={[styles.text, { backgroundColor, width: "20%" }]} />
        <Animated.View style={[styles.text, { backgroundColor, width: "40%" }]} />
        <Animated.View style={[styles.text, { backgroundColor, width: "30%" }]} />
      </View>
      <Animated.View style={[styles.image, { backgroundColor }]} />
      <View style={styles.textContainer}>
        <Animated.View style={[styles.text, { backgroundColor, width: "30%" }]} />
        <Animated.View style={[styles.text, { backgroundColor, width: "20%" }]} />
        <Animated.View style={[styles.text, { backgroundColor, width: "60%" }]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    // shadowRadius: 5,
    // elevation: 3,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  textContainer: {
    marginTop: 10,
  },
  text: {
    // width: '80%',
    height: 20,
    marginVertical: 5,
    borderRadius: 4,
  },
});

export default ProductsSkeletonLoader;