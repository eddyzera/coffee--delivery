import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { CoffeeList } from '../CoffeeList'

describe('<CoffeeList component>', () => {
  it('should render component without errors', () => {
    render(<CoffeeList />)
    const coffeeList = screen.getByTestId('coffeList-component')

    expect(coffeeList).toBeTruthy()
  })
})
