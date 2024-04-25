import React from 'react';
import { Text } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';


export const P = ({ className, children, fontSize, style }) => {
  const textStyle = {};
  if (fontSize) textStyle.fontSize = hp(fontSize);

  return (
    <Text className={className} style={{ ...textStyle, ...style }}>
      {children}
    </Text>
  );
};
