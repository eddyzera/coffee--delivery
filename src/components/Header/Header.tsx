import React from 'react'
import LogoCoffee from '../../assets/svg/logo-coffee.svg'

export const Header: React.FunctionComponent = () => {
  return (
    <header>
      <div>
        <img src={LogoCoffee} alt="Coffee Delivery" />
        <div>
          <button>Porto Alegre, RS</button>
          <button>cart</button>
        </div>
      </div>
    </header>
  )
}
