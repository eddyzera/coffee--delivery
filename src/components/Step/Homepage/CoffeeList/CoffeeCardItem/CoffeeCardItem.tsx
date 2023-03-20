import React from 'react'
import { Minus, Plus, ShoppingCart } from 'phosphor-react'

export const CoffeeCardItem: React.FunctionComponent = () => {
  return (
    <div className="bg-gray-50 p-[20px] flex flex-col">
      <div className="flex items-center justify-center mt-[-45px]">
        <img src="public/assets/img/coffee-mock.png" alt="" />
      </div>
      <div className="flex flex-col items-center justify-center">
        <span className="bg-yellow-50 text-yellow-500 uppercase py-[4px] px-[8px] text-1 font-bold rounded-lg mt-[12px] mb-[16px]">
          Tradicional
        </span>
        <h3 className="text-brown-200 tex-6 font-bold leading-1 mb-[8px]">
          Expresso Tradicional
        </h3>
        <p className="text-brown-50 text-3 text-center leading-1 mb-[33px]">
          O tradicional café feito com água quente e grãos moídos
        </p>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-3 text-brown-100">
          R$ <span className="text-7 font-baloo font-extra">9,90</span>
        </p>
        <div className="flex items-center gap-x-[8px]">
          <div className="flex items-center rounded-md bg-gray-200 gap-[4px]">
            <button className="px-[8px] py-[12px]">
              <Minus size={14} weight="bold" />
            </button>
            <p className="text-4 text-brown-500 leading-1">1</p>
            <button className="px-[8px] py-[12px]">
              <Plus size={14} weight="bold" className="text-purple-500" />
            </button>
          </div>
          <button className="p-[8px] rounded-md bg-purple-500 text-white-50">
            <ShoppingCart size={22} weight="fill" />
          </button>
        </div>
      </div>
    </div>
  )
}
