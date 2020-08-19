import React from 'react'
import styled from 'styled-components'
import DefaultButton from './button'

const EditorButtons = props => {
  return (
    <Wrapper>
      <Button onClick={props.save}>Save</Button>
      <Button onClick={props.reset} secondary>
        Reset
      </Button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;

  & > * {
    margin-right: 1rem;
  }
`

const Button = styled(DefaultButton)`
  font-size: 1rem;
  padding: 0.5em 1em;
  background: ${props => (props.secondary ? 'white' : '#001659')};
  color: ${props => (props.secondary ? '#001659' : 'white')};
  border: ${props => (props.secondary ? '1px solid #001659' : 'none')};
`

export default EditorButtons
