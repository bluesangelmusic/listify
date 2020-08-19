import React from 'react'
import styled from 'styled-components'
import Button from './button'

const TabSelector = props => {
  return (
    <Wrapper>
      {props.tabs.map(tab => (
        <Button key={tab.id} onClick={() => props.select(tab.id)}>
          {tab.name}
        </Button>
      ))}
      <Button onClick={props.create}>Create</Button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  & > * {
    margin: 1rem;
  }
`

export default TabSelector
