import React, { useState } from 'react'
import { ScrollView as ScrollViewNative } from 'react-native'
import { ScrollContextInterface } from './types'
import { ChildProps } from '../types'

const withinLimits = (val: number, min: number, max: number): number =>
  val > max
    ? max
    : val < min
      ? min
      : val

export const ScrollContext = React.createContext<ScrollContextInterface>({
  opacity: 0,
  maxOffset: 0,
  offset: 0,
  titleShowing: false,
  updateOffset: (val: number) => { }
});

export const useScroller = () => React.useContext(ScrollContext);

export const ScrollContextProvider = (props: ChildProps) => {

  const minOffset: number = 0;
  const maxOffset: number = 30;

  const [offset, setOffset] = useState(0);
  const [titleShowing, setTitleShowing] = useState(false);
  const [opacity, setOpacity] = useState(0);

  const updateOffset = (val: number) => {
    setOffset(withinLimits(val, minOffset, maxOffset));
    setTitleShowing(val > maxOffset);
    setOpacity(withinLimits(val * maxOffset / 1000, 0, 1));
  }

  return (
    <ScrollContext.Provider value={{
      opacity: opacity,
      maxOffset: maxOffset,
      offset: offset,
      titleShowing: titleShowing,
      updateOffset: updateOffset,
    }}>
      {props.children}
    </ScrollContext.Provider>
  )
}

export const ScrollView = (props: ChildProps) => {

  const { maxOffset, titleShowing, opacity, updateOffset } = useScroller();

  return (
    <ScrollViewNative
      {...props}
      onScroll={({ nativeEvent }) => {
        const offset = nativeEvent.contentOffset.y;
        if (offset <= maxOffset && opacity !== 0
          || offset > maxOffset && (titleShowing === false || opacity < 1)) {
          updateOffset(offset);
        }
      }}
      scrollEventThrottle={500}
    >
      {props.children}
    </ScrollViewNative>
  )
}

export default ScrollContextProvider;