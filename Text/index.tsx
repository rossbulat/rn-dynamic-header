import React from 'react'
import { Text as TextNative } from 'react-native'

const defaultText = '#000';
const primaryText = 'blue';

export const Text = (props: any) => {

  const { style } = props;
  let color: string = defaultText;

  if (style !== undefined) {
    delete props['style'];

    if (style.color !== undefined)
      color = style.color;

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