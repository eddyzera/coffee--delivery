import React from 'react'
import { Header } from '../../components'
import { SectionBanner } from '../../components/Step/Homepage'
import { CoffeeList } from '../../components/Step/Homepage/CoffeeList/CoffeeList'

export const HomePage: React.FunctionComponent = () => {
  return (
    <>
      <Header />
      <SectionBanner />
      <CoffeeList />
    </>
  )
}
