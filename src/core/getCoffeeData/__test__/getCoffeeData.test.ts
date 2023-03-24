import { getCoffeeData } from '../getCoffeeData'

describe('getCoffeeData', () => {
  it('should return data with a certain format', async () => {
    const response = await getCoffeeData()
    console.log(response)
  })
})
