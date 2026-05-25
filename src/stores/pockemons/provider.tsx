'use client'

import { Provider } from 'react-redux'
import { store } from './index'

interface PockemonProviderProps {
  children: React.ReactNode
}

export function PockemonsProvider({
  children
}: PockemonProviderProps) {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}