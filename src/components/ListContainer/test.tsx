import { renderWithTheme } from 'utils/tests/helpers'

import { ListContainer } from '.'

describe('<ListContainer />', () => {
  it('should render the ListContainer', () => {
    const { container } = renderWithTheme(<ListContainer />)

    expect(container).toBeInTheDocument()
  })
})
