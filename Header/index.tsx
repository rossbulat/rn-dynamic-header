import React, { useState, useEffect } from 'react'
import { View, Text, Animated, Easing } from 'react-native'
import { useScroller } from '../ScrollContext'
import { styles } from './styles'
import { HeaderProps } from './types'

export const Header = (props: HeaderProps) => {

  const { titleShowing, opacity } = useScroller();

  const [titleFade] = useState(
    new Animated.Value(0)
  );

  useEffect(() => {
    titleShowing === false &&
      Animated.timing(
        titleFade, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
        easing: Easing.sin
      }).start();

    titleShowing === true &&
      Animated.timing(
        titleFade, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
        easing: Easing.sin
      }).start();
  });

  return (
    <View style={{
      ...styles.header,
      shadowOpacity: opacity,
    }}>
      <View style={styles.headerLeft}>
        {props.headerLeft !== undefined && props.headerLeft}
      </View>
      <Animated.View
        style={{
          opacity: titleFade,
          ...styles.headerTitle,
        }}
      >
        <Text style={styles.title}>
          {props.title}
        </Text>
      </Animated.View>
      <View style={styles.headerRight}>
        {props.headerRight !== undefined && props.headerRight}
      </View>
    </View>
  )
}

export default Header;