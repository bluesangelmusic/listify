import React from 'react'
import styled from 'styled-components'
import DefaultButton from './button'
import { Tab } from '../types'

interface Props {
  tabs: Tab[]
  select: (id: string) => void
  create: () => void
}

const TabSelector: React.FC<Props> = props => {
  return (
    <Wrapper>
      <h2>Select a Tab</h2>
      {props.tabs.map(tab => (
        <Button key={tab.id} onClick={() => props.select(tab.id)}>
          {tab.name}
        </Button>
      ))}
      <CreateButton onClick={props.create}>+</CreateButton>
    </Wrapper>
  )
}

const Wrapper = styled.div``

const Button = styled(DefaultButton)`
  font-size: 1rem;
  margin: 1rem;
`

const CreateButton = styled(Button)`
  background: #001659;
  color: white;
  font-weight: bold;
`

export default TabSelector
