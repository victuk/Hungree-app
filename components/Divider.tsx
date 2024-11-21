/* eslint-disable prettier/prettier */

import { StyleSheet, View } from 'react-native';

export const Divider = (): JSX.Element => {
  return <View style={styles.divider} />;
};

const styles = StyleSheet.create({
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: 'lightgray',
    marginVertical: 10,
  },
});
