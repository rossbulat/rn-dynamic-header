import React from 'react'
import { Text as TextNative } from 'react-native'
import { TextProps } from './types'

const defaultText: string = '#000';
const primaryText: string = 'blue';

export const Text = (props: TextProps | any) => {

  const style: Object = props.style;
  let color: string = defaultText;

  if (style !== undefined) {
    delete props.style;

    if (style['color'] !== undefined)
      color = style['color'];

    if (props.primaryColor)
      color = primaryText;
  }

  return (
    <TextNative
      {...props}
      style={{
        ...style,
        color: color,
      }}
    />
  )
}

export default Text;