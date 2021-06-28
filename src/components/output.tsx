import React, { PropsWithChildren } from 'react'
import styled from 'styled-components'

const Output: React.FC<PropsWithChildren<any>> = props => {
  if (!props.children) return null

  return (
    <Wrapper>
      <Container>{props.children}</Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 1rem 2rem;
  background: #f5f5ff;
`

const Container = styled.code`
  font-family: 'Courier New', Courier, monospace;
  max-height: 10em;
  overflow: auto;
`

export default Output
