import { Pressable, StyleProp, StyleSheet, Text, ViewStyle } from 'react-native';

import { colors } from '~/constants';

type Props = {
  buttonTitle: string;
  onPress: () => void;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  color?: string;
};
export const CustomButton = ({ buttonTitle, onPress, disabled, style, color }: Props) => {
  return (
    <Pressable
      disabled={disabled}
      onPress={onPress}
      style={({ pressed }) => [
        styles.pressable,
        { opacity: pressed || disabled ? 0.5 : 1 },
        style,
      ]}>
      <Text style={[styles.title, { color }]}>{buttonTitle}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressable: {
    height: 55,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.yellow,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.dark,
  },
});
