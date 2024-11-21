/* eslint-disable prettier/prettier */

import { Text, View } from 'react-native';

import { CustomButton } from './CustomButton';

type Props = {
  onRefetch: () => void;
};

export const ErrorComponent = ({ onRefetch }: Props): JSX.Element => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text
        style={{
          color: 'red',
          fontSize: 40,
          textAlign: 'center',
          marginBottom: 15,
          fontWeight: 'bold',
        }}>
        Something went wrong
      </Text>
      <CustomButton style={{ width: 200 }} buttonTitle="Retry" onPress={onRefetch} />
    </View>
  );
};
