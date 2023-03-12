import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Location } from '../Location'

describe('<Component Location />', () => {
  it('should render without errors', () => {
    render(<Location />)
    const location = screen.getByTestId('component-location')
    expect(location).toBeTruthy()
  })
})
