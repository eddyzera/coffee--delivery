import React from 'react'
import LogoCoffee from '../../assets/svg/logo-coffee.svg'

export const Header: React.FunctionComponent = () => {
  return (
    <header className="py-[32px] px-[160px]" data-testid="component-header">
      <div className="container flex items-center justify-between">
        <img src={LogoCoffee} alt="Coffee Delivery" />
        <div>
          <button>Porto Alegre, RS</button>
          <button>cart</button>
        </div>
      </div>
    </header>
  )
}
