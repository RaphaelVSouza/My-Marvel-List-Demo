import Media from "styled-media-query";

import styled, { css } from 'styled-components'

export const ListContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    margin-top: ${theme.spacings.xlarge};

    ${Media.between("medium", "large")`
      display: grid;
      grid-template-columns: 1fr 1fr;

    `}

    ${Media.greaterThan("large")`
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;

    `}
  `}
`
