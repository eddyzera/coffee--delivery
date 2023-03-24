import React from 'react'
import { CoffeeCardItem } from './CoffeeCardItem/CoffeeCardItem'

export const CoffeeList: React.FunctionComponent = () => {
  return (
    <section
      className="pt-[32px] pb-[157px] px-[160px]"
      data-testid="coffeList-component"
    >
      <h2 className="text-8 text-brown-500 leading-1">Nossos cafés</h2>
      <div className="grid grid-cols-4 gap-x-[40px] gap-y-[32px] mt-[54px]">
        {[...Array(14).keys()].map((it) => (
          <CoffeeCardItem key={it} />
        ))}
      </div>
    </section>
  )
}
