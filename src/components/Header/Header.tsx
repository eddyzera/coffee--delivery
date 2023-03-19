import React from 'react'
import { Location } from '../Location/Location'
import { Cart } from '../Cart/Cart'

export const Header: React.FunctionComponent = () => {
  return (
    <header className="py-[32px] px-[160px]" data-testid="component-header">
      <div className="container flex items-center justify-between">
        <img src="public/assets/svg/logo-coffee.svg" alt="Coffee Delivery" />
        <div className="flex items-center gap-[12px]">
          <Location />
          <Cart />
        </div>
      </div>
    </header>
  )
}
