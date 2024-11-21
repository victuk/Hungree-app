import React from 'react';
import { StyleSheet, Text } from 'react-native';

type Props = {
  title: string;
};

export const Title = ({ title }: Props) => {
  return <Text style={styles.title}>{title}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 15,
  },
});
