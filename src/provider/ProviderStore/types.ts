interface ICoffee {
  id: number
  types: Array<string>
  coffee_name: string
  coffee_description: string
  img_url: string
  price: number
}

export interface IInitialState {
  coffe: Array<ICoffee>
}

export interface IRooState {
  coffee: IInitialState['coffe']
}
