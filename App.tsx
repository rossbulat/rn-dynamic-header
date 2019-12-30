import React from 'react'
import { ScrollContextProvider } from './ScrollContext'
import { Document } from './Document'

export default function App () {
  return (
    <ScrollContextProvider>
      <Document />
    </ScrollContextProvider>
  );
}