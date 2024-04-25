import React from 'react';

import { View } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const Div = ({ height, width, className, children, style }) => {
    const containerStyle = {};
    if (height) containerStyle.height = hp(height);
    if (width) containerStyle.width = hp(width);

    return (
        <View className={className} style={{ ...containerStyle, ...style }}>
            {children}
        </View>
    );
};
