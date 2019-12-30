import React, { useState } from 'react'

export const ScrollContext: React.Context<any> = React.createContext({
  currentOffset: 0,
  updateOffset: () => { }
});

export const useScroller = () => React.useContext(ScrollContext);

export const ScrollContextProvider = (props: any) => {

  const [offset, setOffset] = useState(0);

  const updateOffset = (val: number) => {
    setOffset(val);
  }

  return (
    <ScrollContext.Provider value={{
      currentOffset: offset,
      updateOffset: updateOffset
    }}>
      {props.children}
    </ScrollContext.Provider>
  )
}

export default ScrollContextProvider;