import React from 'react'
import styled from 'styled-components'
import DefaultButton from './button'

const TabSelector = props => {
  return (
    <Wrapper>
      <h2>Select a Tab</h2>
      {props.tabs.map(tab => (
        <Button key={tab.id} onClick={() => props.select(tab.id)}>
          {tab.name}
        </Button>
      ))}
      <Button onClick={props.create}>Create</Button>
    </Wrapper>
  )
}

const Wrapper = styled.div``

const Button = styled(DefaultButton)`
  font-size: 1rem;
  margin: 1rem;
`

export default TabSelector
