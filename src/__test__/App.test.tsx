import React from 'react'
import { App } from '../App'
import { render } from '@testing-library/react'

describe('<App />', () => {
  it('should do a test', () => {
    render(<App />)
    expect(true).toBeTruthy()
  })
})
