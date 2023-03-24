import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IInitialState } from '../types'

const initialState: IInitialState = {
  coffe: [],
}

export const coffeeSlice = createSlice({
  name: 'coffee',
  initialState,
  reducers: {
    changeCoffeeList(state, action: PayloadAction<IInitialState['coffe']>) {
      state.coffe = action.payload
    },
  },
})

export const { actions: coffeeActions } = coffeeSlice

export default coffeeSlice.reducer
