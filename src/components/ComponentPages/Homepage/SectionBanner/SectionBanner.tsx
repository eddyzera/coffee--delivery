import React from 'react'
import CoffeBanner from '../../assets/img/banner-coffe.png'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

export const SectionBanner: React.FunctionComponent = () => {
  return (
    <section
      className="pt-[94px] pb-[108px] px-[160px]"
      data-testid="section-banner"
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
              <ShoppingCart size={16} weight="fill" />
              Compra simples e segura
            </li>
            <li className="item-list-higlight">
              <Package size={16} weight="fill" />
              Embalagem mantém o café intacto
            </li>
            <li className="item-list-higlight">
              <Timer size={16} weight="fill" />
              Entrega rápida e rastreada
            </li>
            <li className="item-list-higlight">
              <Coffee size={16} weight="fill" />O café chega fresquinho até você
            </li>
          </ul>
        </div>
        <img src={CoffeBanner} alt="Banner Coffe Delivery" />
      </div>
    </section>
  )
}
