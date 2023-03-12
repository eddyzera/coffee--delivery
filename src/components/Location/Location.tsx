import React from 'react'
import { MapPin } from '@phosphor-icons/react'

export const Location: React.FunctionComponent = () => {
  return (
    <>
      <button className="flex items-center bg-purple-50 text-purple-500 p-[8px]">
        <MapPin size={22} weight="fill" className="text-purple-500" />
        Mogi das Cruzes, SP
      </button>
    </>
  )
}
