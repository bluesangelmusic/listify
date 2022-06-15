import { PropsWithChildren } from 'react'
import styled from 'styled-components'

export type OutputProps = PropsWithChildren<{}>

/**
 * Wrapper element for the generated HTML, which should be passed in as
 * `children`.
 *
 * @param {OutputProps} props
 */
export const Output = ({ children }: OutputProps) => {
  if (!children) return null

  return (
    <Wrapper>
      <Container>{children}</Container>
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
