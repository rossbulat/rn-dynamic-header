import React from 'react'
import { ScrollContextProvider } from './ScrollContext'
import { Document } from './Document'

export const App = () =>
  <ScrollContextProvider>
    <Document />
  </ScrollContextProvider>;

export default App;