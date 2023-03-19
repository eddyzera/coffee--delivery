import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { SectionBanner } from '../SectionBanner'

describe('<Component SectionBanner />', () => {
  it('should render component without errors', () => {
    render(<SectionBanner />)
    const sectionBanner = screen.getByTestId('section-banner-component')

    expect(sectionBanner).toBeTruthy()
  })
})
