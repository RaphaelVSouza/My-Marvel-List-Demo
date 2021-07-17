import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import CharacterCard from '.'

const TEST_IMAGE = {
  path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/c0/527bb7b37ff55',
  extension: 'jpg',
}

describe('<CharacterCard />', () => {
  it('should render the character card', () => {
    const { container } = renderWithTheme(
      <CharacterCard
        id="1"
        name="Iron Man"
        thumbnail={TEST_IMAGE}
        data-testid="character-card"
      />
    )

    expect(screen.getByRole('article')).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
