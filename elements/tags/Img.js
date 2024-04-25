import React from 'react'
import { Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const Img = ({className, source, height, width, style}) => {
    imgStyle = {}
    if (height) imgStyle.height = hp(height);
    if (width) imgStyle.width = hp(width);
    return (
        <Image className={className} style={{ ...imgStyle, ...style }} source={source} />
    )
}

