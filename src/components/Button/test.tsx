import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Button from '.'

describe.only('<Button />', () => {
  it('should render the button with small size', () => {
    renderWithTheme(<Button size="small" />)

    expect(screen.getByRole('button')).toHaveStyle({
      height: '3rem',
      'font-size': '1.6rem',
    })
  })

  it('should render the button with medium size', () => {
    renderWithTheme(<Button size="medium" />)

    expect(screen.getByRole('button')).toHaveStyle({
      height: '4rem',
      'font-size': '1.8rem',
    })
  })

  it('should render the button with large size', () => {
    renderWithTheme(<Button size="large" />)

    expect(screen.getByRole('button')).toHaveStyle({
      height: '5rem',
      'font-size': '2.2rem',
    })
  })
})
