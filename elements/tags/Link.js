import React from 'react'
import { TouchableOpacity, Linking } from 'react-native';
export const Link = ({className,children,style,url}) => {
  return (
      <TouchableOpacity
          onPress={() =>
              Linking.openURL(url)
          }
          className={className}
          style={{...style}}
          >
         {children}
      </TouchableOpacity>
  )
}
