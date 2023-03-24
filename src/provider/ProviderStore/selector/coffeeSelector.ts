import { createSelector } from '@reduxjs/toolkit'
import { IRooState } from '../types'

const coffeeSelectSlice = (state: IRooState) => state.coffee

export const selectCoffee = createSelector(
  [coffeeSelectSlice],
  (state) => state,
)
