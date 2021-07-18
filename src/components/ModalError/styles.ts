import styled, { css } from 'styled-components'
import Media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: ${theme.colors.boxBg};
    color: ${theme.colors.texts};
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.xxsmall};
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    z-index: ${theme.indexes.modal};

    ${Media.greaterThan('medium')`
      max-width: 30rem;
    `}
  `}
`

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    padding-bottom: ${theme.spacings.xsmall};
    border-bottom: 1px solid ${theme.colors.black};
    width: 100%;
    text-align: center;
  `}
`

export const Text = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxsmall};
    margin: ${theme.spacings.xsmall} 0;
  `}
`
