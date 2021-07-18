import Button from 'components/Button'
import * as S from './styles'

export type ModalErrorProps = {
  title: string
  text: string
  btnText: string
}

const ModalError = ({
  title = 'Something wrong happened!',
  text = 'An unexpected error ocurred, try again later.',
  btnText = 'Back to home page',
}: ModalErrorProps) => {
  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <S.Text>{text}</S.Text>
      <Button children={btnText} href="/" size="medium" />
    </S.Wrapper>
  )
}

export default ModalError
