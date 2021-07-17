import styled, { css, DefaultTheme } from 'styled-components'
import Media from 'styled-media-query'
import { ButtonProps } from '.'

type WrapperProps = Pick<ButtonProps, 'size' | 'fullWidthOnMobile'>

const wrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    height: 3rem;
    font-size: ${theme.font.sizes.xsmall};
  `,
  medium: (theme: DefaultTheme) => css`
    height: 4rem;
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
  `,
  large: (theme: DefaultTheme) => css`
    height: 5rem;
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xlarge};
  `,
  fullWidthOnMobile: () => css`
    ${Media.lessThan('medium')`
      width: 100%;
    `}
  `,
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, size, fullWidthOnMobile }) => css`
    background-color: ${theme.colors.buttonBg};
    color: ${theme.colors.white};
    border: none;
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.xxsmall};
    cursor: pointer;
    transition: opacity 200ms ease-in-out;

    &:hover {
      opacity: 0.8;
    }

    ${!!size && wrapperModifiers[size](theme)}
    ${!!fullWidthOnMobile && wrapperModifiers.fullWidthOnMobile()}
  `}
`
