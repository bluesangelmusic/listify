import React from 'react'
import styled from 'styled-components'
import DefaultButton from './button'

const CodeModal = props => {
  return (
    <Wrapper onClick={props.dismiss}>
      <Dialog onClick={e => e.stopPropagation()}>
        <CodeBlock>{props.children}</CodeBlock>
        <form
          action="https://codepen.io/pen/define"
          method="POST"
          target="_blank"
        >
          <input
            type="hidden"
            name="data"
            value={JSON.stringify({
              title: 'Listify Preview',
              html: props.children,
            })}
          />

          <Button>Preview on CodePen</Button>
        </form>
      </Dialog>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
`

const Dialog = styled.div`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 400px;
  background: white;
  box-shadow: 0 7px 10px #777;
  padding: 2rem;
`

const CodeBlock = styled.code`
  background: #f0f0ff;
  font-family: 'Courier New', Courier, monospace;
  max-height: 10em;
  overflow: auto;
  display: block;
  padding: 1rem;
`

const Button = styled(DefaultButton)`
  margin: 1rem auto;
`

export default CodeModal
