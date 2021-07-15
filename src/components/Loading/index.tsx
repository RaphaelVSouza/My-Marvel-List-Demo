import * as S from './styles'

const Loading = () => (
  <S.Wrapper>
    <S.LoadingIcon src={`${process.env.PUBLIC_URL}/loading-icon.svg`} />
  </S.Wrapper>
)

export default Loading
