import React, { useState } from 'react'
import { View, Text, Animated, Easing } from 'react-native'
import { useScroller } from '../ScrollContext'
import { styles } from './styles'

const Header = (props: any) => {

  // transition start y pos
  const minOffset = 0;

  // transition end y pos
  const maxOffset = 30;

  const [titleFade] = useState(new Animated.Value(0));
  const [titleShowing, setTitleShowing] = useState(0);

  const scroller = useScroller();

  const fadeInAnim = Animated.timing(
    titleFade, {
    toValue: 1,
    duration: 300,
    useNativeDriver: true,
    easing: Easing.sin
  });

  const fadeOutAnim = Animated.timing(
    titleFade, {
    toValue: 0,
    duration: 300,
    useNativeDriver: true,
    easing: Easing.sin
  });

  const withinLimits = (offset: number) => {
    if (offset > maxOffset)
      return maxOffset;
    if (offset < minOffset)
      return minOffset;
    return offset;
  }

  const offset = withinLimits(scroller.currentOffset);

  // trigger hide or show title when in limits
  if (offset < maxOffset) {
    if (titleShowing === 1) {
      setTitleShowing(0);
      fadeOutAnim.start();
    }

  } else {
    if (titleShowing === 0) {
      setTitleShowing(1);
      fadeInAnim.start();
    }
  }

  // generate opacity value between 0 and 1
  const opacity = offset * (maxOffset / 1000);

  return (
    <View style={{
      ...styles.header,
      shadowOpacity: opacity,
    }}
    >
      <View style={styles.headerLeft}>
        {props.headerLeft !== undefined && props.headerLeft}
      </View>
      <Animated.View
        style={{
          opacity: titleFade,
          ...styles.headerTitle,
        }}
      >
        <Text style={{ ...styles.title, color: 'blue' }}>
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