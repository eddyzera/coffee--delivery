import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Cart } from '../Cart'

describe('<Component Cart />', () => {
  it('should render component without errors', () => {
    render(<Cart />)
    const cart = screen.getByTestId('component-cart')
    expect(cart).toBeTruthy()
  })
})
