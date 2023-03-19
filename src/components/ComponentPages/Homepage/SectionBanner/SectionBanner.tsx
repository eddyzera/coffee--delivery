import React from 'react'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

export const SectionBanner: React.FunctionComponent = () => {
  return (
    <section
      className="pt-[94px] pb-[108px] px-[160px]"
      data-testid="section-banner-component"
    >
      <div className="container flex items-center justify-between gap-[56px]">
        <div className="max-w-[588px]">
          <h1 className="text-9 text-brown-500 font-extra leading-1">
            Encontre o café perfeito para qualquer hora do dia
          </h1>
          <p className="text-brown-200 text-6 leading-1 font-normal mt-[16px] mb-[66px]">
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
          <ul className="grid grid-cols-2 gap-x-[20px] gap-y-[40px]">
            <li className="item-list-higlight">
              <p className="p-[8px] bg-yellow-500 rounded-lg">
                <ShoppingCart
                  size={16}
                  weight="fill"
                  className="text-white-50"
                />
              </p>
              <p className="text-4">Compra simples e segura</p>
            </li>
            <li className="item-list-higlight">
              <p className="p-[8px] bg-brown-500 rounded-lg">
                <Package size={16} weight="fill" className="text-white-50" />
              </p>
              <p className="text-4">Embalagem mantém o café intacto</p>
            </li>
            <li className="item-list-higlight">
              <p className="p-[8px] bg-yellow-100 rounded-lg">
                <Timer size={16} weight="fill" className="text-white-50" />
              </p>
              <p className="text-4">Entrega rápida e rastreada</p>
            </li>
            <li className="item-list-higlight">
              <p className="p-[8px] bg-purple-100 rounded-lg">
                <Coffee size={16} weight="fill" className="text-white-50" />
              </p>
              <p className="text-4">O café chega fresquinho até você</p>
            </li>
          </ul>
        </div>
        <img
          src="public/assets/img/banner-coffe.png"
          alt="Banner Coffe Delivery"
        />
      </div>
    </section>
  )
}
