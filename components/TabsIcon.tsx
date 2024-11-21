/* eslint-disable prettier/prettier */

import { AntDesign } from '@expo/vector-icons';

import { colors } from '~/constants';

type Props = {
  focused: boolean;
  name: React.ComponentProps<typeof AntDesign>['name'];
  size: number;
};

export const TabsIcon = ({ focused, name, size }: Props): JSX.Element => {
  return (
    <AntDesign
      name={name}
      size={size}
      color={focused ? colors.yellow : colors.dark}
      style={{ marginBottom: -3 }}
    />
  );
};
