import React from 'react'
import { ShoppingCart } from 'phosphor-react'

export const Cart: React.FunctionComponent = () => {
  return (
    <div className="relative">
      <div className="flex items-center justify-center bg-yellow-500 text-yellow-50 w-5 h-5 rounded-full text-2 font-normal absolute right-[-10px] top-[-7px]">
        1
      </div>
      <button
        className="p-[8px] bg-yellow-50 hover:bg-yellow-500 text-yellow-500 hover:text-yellow-50 rounded-sm"
        data-testid="component-cart"
      >
        <ShoppingCart size={22} weight="fill" className="" />
      </button>
    </div>
  )
}
