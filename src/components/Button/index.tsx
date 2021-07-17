import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'
import * as S from './styles'

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  children?: React.ReactNode
  size?: 'small' | 'medium' | 'large'
  fullWidthOnMobile?: boolean
} & ButtonTypes

const Button = ({
  children,
  size = 'medium',
  fullWidthOnMobile = false,
}: ButtonProps) => (
  <S.Wrapper size={size} fullWidthOnMobile={fullWidthOnMobile}>
    {!!children && <span>{children}</span>}
  </S.Wrapper>
)

export default Button
