import React from 'react'
import { render } from '@testing-library/react'
import { Cart } from './Cart'

describe('Icon', () => {
  it('matches snapshot', () => {
    const { container } = render(<Cart />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
