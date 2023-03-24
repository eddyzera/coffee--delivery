import React from 'react'
import { useSelector } from 'react-redux'
import { Header } from '../../components'
import { SectionBanner } from '../../components/Step/Homepage'
import { CoffeeList } from '../../components/Step/Homepage/CoffeeList/CoffeeList'
import { selectCoffee } from '../../provider/ProviderStore/selector/coffeeSelector'

export const HomePage: React.FunctionComponent = () => {
  const coffee = useSelector(selectCoffee)
  console.log(coffee)
  return (
    <>
      <Header />
      <SectionBanner />
      <CoffeeList />
    </>
  )
}
