import React from 'react'
import { HomePage } from './pages'
import { ProviderStore } from './provider/ProviderStore/ProviderStore'

export const App: React.FunctionComponent = () => {
  return (
    <ProviderStore>
      <HomePage />
    </ProviderStore>
  )
}
