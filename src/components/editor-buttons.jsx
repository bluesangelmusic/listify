import React from 'react'
import styled from 'styled-components'
import DefaultButton from './button'

const EditorButtons = props => {
  return (
    <Wrapper>
      <Button onClick={props.save} disabled={!props.isModified}>
        Save
      </Button>
      <Button onClick={props.reset} disabled={!props.isModified} secondary>
        Reset
      </Button>
      <Button onClick={props.delete} secondary>
        Delete
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
  background: ${props =>
    props.disabled ? '#eee' : props.secondary ? 'white' : '#001659'};
  color: ${props =>
    props.disabled ? '#777' : props.secondary ? '#001659' : 'white'};
  border: ${props =>
    props.disabled ? '#eee' : props.secondary ? '1px solid #001659' : 'none'};
`

export default EditorButtons
