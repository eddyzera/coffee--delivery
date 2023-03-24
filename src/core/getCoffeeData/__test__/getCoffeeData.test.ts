import { createSandbox } from 'sinon'
import { CoffeeService } from '../CoffeeService'
import responseMock from '../../../mocks/coffeList.json'
const sandbox = createSandbox()
describe('CoffeeService', () => {
  it('should return data when use getCoffeeData', async () => {
    const coffeService = new CoffeeService()
    const stub = sandbox.stub(coffeService, 'getCoffeeData')
    stub.withArgs().resolves(responseMock)

    const response = await coffeService.getCoffeeData()

    expect(response).toEqual(responseMock)
  })
})
