import React from 'react'
import { MapPin } from 'phosphor-react'

export const Location: React.FunctionComponent = () => {
  return (
    <>
      <button
        className="flex items-center bg-purple-50 hover:bg-purple-500 text-purple-500 hover:text-purple-50 p-[8px] rounded-md font-normal gap-[4px]"
        data-testid="component-location"
      >
        <MapPin size={22} weight="fill" />
        Mogi das Cruzes, SP
      </button>
    </>
  )
}
