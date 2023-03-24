import { configureStore } from '@reduxjs/toolkit'
import coffeeReducer from './slice/coffeeSlice'

export default configureStore({
  reducer: {
    coffee: coffeeReducer,
  },
})
