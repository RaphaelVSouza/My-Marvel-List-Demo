import { render, screen } from '@testing-library/react'

import Loading from '.'

describe('<Loading />', () => {
  it('should render the loading', () => {
    const { container } = render(<Loading />)

    expect(screen.getByAltText('a circle spinning representing a loading')).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
