import styled, { css } from 'styled-components'

export const Wrapper = styled.ul`

${({ theme }) => css`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: ${theme.spacings.small};
  li ~ li {
    margin-left: ${theme.spacings.xxsmall};
  }

  li + button {
    margin-left: ${theme.spacings.xxsmall};
  }

  button + li {
    margin-left: ${theme.spacings.xxsmall};
  }

  button + button {
    margin-left: ${theme.spacings.xxsmall};
  }
  `}

`

export const Arrow = styled.button`
  ${({ theme }) => css`
    width: 3rem;
    height: 3rem;
    background-color: ${theme.colors.buttonBg};
    border: none;
    cursor: pointer;
    color: ${theme.colors.white};
    font-weight: ${theme.font.bold};
    border-radius: ${theme.border.radius};

    transition: opacity 200ms ease-in-out;

    &:hover {
      opacity: 0.6;
    }
  `}
`

type IndexProps = {
  isActive: boolean
}

export const Index = styled.button<IndexProps>`
  ${(props) => css`
    width: 3rem;
    height: 3rem;
    background-color: ${props.theme.colors.buttonBg};
    opacity: ${props.isActive ? 0.6 : 1};
    border: none;
    cursor: pointer;
    color: ${props.theme.colors.white};
    font-weight: ${props.theme.font.bold};
    border-radius: ${props.theme.border.radius};
    transition: opacity 200ms ease-in-out;

    &:hover {
      opacity: 0.6;
    }

  `}


`
