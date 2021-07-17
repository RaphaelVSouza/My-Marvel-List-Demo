import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
    from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const LoadingIcon = styled.img`
  animation: ${rotate} 2s linear infinite;
`
