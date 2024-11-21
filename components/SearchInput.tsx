/* eslint-disable prettier/prettier */

import { AntDesign } from '@expo/vector-icons';
import { Pressable, StyleSheet, View } from 'react-native';

import { CustomInput } from './form/CustomInput';

import { colors } from '~/constants';

type Props = {
  value: string;
  onChange: (value: string) => void;
  onClear: () => void;
};

export const SearchInput = ({ onChange, value, onClear }: Props): JSX.Element => {
  return (
    <View style={styles.container}>
      <AntDesign name="search1" color={colors.dark} size={25} />
      <CustomInput
        value={value}
        onChangeText={onChange}
        placeholder="Search by name"
        style={{ borderWidth: 0, flex: 1}}
        containerStyle={{ flex: 1 }}
      />
      {value && (
        <Pressable onPress={onClear}>
          <AntDesign name="close" color={colors.dark} size={25} />
        </Pressable>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    borderRadius: 5,
    borderColor: colors.gray,
    borderWidth: 1,
    height: 60,
    marginTop: 20,
    paddingHorizontal: 10,
  },
});
