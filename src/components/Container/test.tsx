import { renderWithTheme } from 'utils/tests/helpers'

import { Container } from '.'

describe('<Container />', () => {
  it('should render the container', () => {
    const { container } = renderWithTheme(<Container />)

    expect(container).toBeInTheDocument()
  })
})
