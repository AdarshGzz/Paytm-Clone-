import React from 'react';
import { TouchableOpacity } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const Button = ({ children, onPress, className, style, height, width, disabled }) => {
    const containerStyle = {};
    if (height) containerStyle.height = hp(height);
    if (width) containerStyle.width = hp(width);

    // Add disabled prop to TouchableOpacity if it's true
    const touchableOpacityProps = disabled ? { disabled: true } : {};

    return (
        <TouchableOpacity
            onPress={onPress}
            className={className}
            style={{ ...containerStyle, ...style }}
            {...touchableOpacityProps}
        >
            {children}
        </TouchableOpacity>
    );
};
