import styled, { css } from 'styled-components'

export const Wrapper = styled.article`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 168px 1fr;
    height: 252px;
    width: 100%;
    max-width: 60rem;
    margin-bottom: ${theme.spacings.small};
  `}
`
export const Details = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.small} ${theme.spacings.xsmall};
  `}
`

export const Name = styled.div`
  ${({ theme }) => css`
    font-weight: 600;
    font-size: 22px;
    color: ${theme.colors.primary};

    margin-bottom: ${theme.spacings.xsmall};
  `}
`

export const Description = styled.div`
  ${({ theme }) => css`
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  `}
`
