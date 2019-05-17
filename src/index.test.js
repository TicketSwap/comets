import React from 'react'
import { render } from 'react-testing-library'
import { Download } from './Download'

describe('Icon', () => {
  it('matches snapshot', () => {
    const { container } = render(<Download />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
