/* eslint-disable prettier/prettier */

import { AntDesign } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colors } from '~/constants';

type Props = {
  qtyInCart: number;
  onDecrease: () => void;
  onIncrease: () => void;
  small?: boolean;
  disableIncrease?: boolean;
  disableDecrease?: boolean;
};

export const UpdateButtons = ({
  qtyInCart,
  onDecrease,
  onIncrease,
  small,
  disableDecrease,
  disableIncrease,
}: Props): JSX.Element => {
  const iconSize = small ? 20 : 30;
  return (
    <View style={[styles.controls, small && { flex: 0, gap: 10 }]}>
      <Pressable
        disabled={disableDecrease}
        onPress={onDecrease}
        style={({ pressed }) => [
          styles.iconStyle,
          { opacity: pressed || disableDecrease ? 0.5 : 1 },
        ]}>
        <AntDesign name="minus" size={iconSize} color={colors.white} />
      </Pressable>
      <Text>{qtyInCart}</Text>
      <Pressable
        disabled={disableIncrease}
        style={({ pressed }) => [
          styles.iconStyle,
          { opacity: pressed || disableIncrease ? 0.5 : 1 },
        ]}
        onPress={onIncrease}>
        <AntDesign name="plus" size={iconSize} color={colors.white} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
  },
  iconStyle: {
    borderRadius: 5,
    padding: 10,
    backgroundColor: colors.yellow,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
