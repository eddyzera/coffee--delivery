import React from 'react'
import { Provider } from 'react-redux'
import storeApp from './store'

export const ProviderStore: React.FunctionComponent<
  React.PropsWithChildren
> = ({ children }) => {
  return <Provider store={storeApp}>{children}</Provider>
}
