import { api } from '../../server/api'
import { IData } from './types'

export class CoffeeService {
  async getCoffeeData(): Promise<IData[]> {
    const response = await api.get('/data')
    return response.data
  }
}
