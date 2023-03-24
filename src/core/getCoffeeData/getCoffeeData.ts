import { api } from '../../server/api'
import { IData } from './types'

export const getCoffeeData = async (): Promise<IData[]> => {
  const response = await api.get('/data')
  return response.data
}
