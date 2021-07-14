import * as S from './styles'
import { apiImageTypes } from 'utils/apiImageTypes'

type CharacterCardProps = {
  id: string
  name: string
  description?: string
  thumbnail: {
    path: string
    extension: string
  }
}

const CharacterCard = ({
  id,
  name,
  description,
  thumbnail
}: CharacterCardProps) => (

  <S.Wrapper>
    <img
      src=
      {`${thumbnail.path}/${apiImageTypes.portrait.fantastic}.${thumbnail.extension}`}
      alt={/image_not_available/.test(thumbnail.path) ? 'not finded' : name}
    />
    <S.Details>
      <S.Name>{name}</S.Name>
      <S.Description>{description
        ? description
        : "No description found."}
      </S.Description>
    </S.Details>
  </S.Wrapper>
)

export default CharacterCard
