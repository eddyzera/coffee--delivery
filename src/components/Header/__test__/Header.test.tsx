import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Header } from '../Header'

describe('<Component Header />', () => {
  it('should render without errors', () => {
    render(<Header />)
    const header = screen.findByTestId('component-header')

    expect(header).toBeTruthy()
  })
})
