import React, { useState } from 'react'
import styled from 'styled-components'
import TabSelector from './tab-selector'
import TabEditor from './tab-editor'
import defaultTabs from '../static/tabs.json'
import Output from './output'
import { v4 as uuid } from 'uuid'

const App = () => {
  const [tabs, setTabs] = useState(
    defaultTabs.map(tab => {
      tab.id = uuid()
      return tab
    })
  )
  const [activeTab, setActiveTab] = useState(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const handleTabSelect = id => {
    const selectedTab = tabs.find(tab => tab.id === id)
    if (!selectedTab) return

    setActiveTab(selectedTab)
    setActiveIndex(1)
  }

  const handleTabCreate = () => {
    const newTab = {
      id: uuid(),
      name: '',
      content: '',
    }

    setTabs([...tabs, newTab])
    setActiveTab(newTab)
    setActiveIndex(1)
  }

  const handleHomeSelect = () => setActiveIndex(0)

  // const generateHtml = () => {
  //   const content = editorState.getCurrentContent()
  //   const raw = convertToRaw(content)
  //   const html = draftToHtml(raw)

  //   setHtml(html)
  // }

  const updateTab = tab => {
    const __tabs = [...tabs]
    const index = __tabs.findIndex(originalTab => tab.id === originalTab.id)

    if (index !== null) {
      __tabs.splice(index, 1, tab)
      setTabs(__tabs)
    }
  }

  return (
    <Wrapper>
      <Viewport>
        <Container activeIndex={activeIndex}>
          <Frame>
            <TabSelector
              tabs={tabs}
              select={handleTabSelect}
              create={handleTabCreate}
            />
          </Frame>
          <Frame>
            {activeTab && (
              <TabEditor
                tab={activeTab}
                updateTab={updateTab}
                back={handleHomeSelect}
              />
            )}
          </Frame>
          <Frame>
            <Output>{'<p>Hello, world!</p>'}</Output>
          </Frame>
        </Container>
      </Viewport>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 90%;
  max-width: 800px;
  margin: auto;
  padding: 2rem;
  background: white;
  box-shadow: 0 3px 4px #ccc;
  margin-top: 5rem;
`
const Viewport = styled.div`
  width: 100%;
  overflow-x: hidden;
`

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.children.length || 1}, 1fr);
  width: calc(100% * ${props => props.children.length || 1});
  transform: translateX(
    calc(
      -100% * ${props => (props.activeIndex || 0) / (props.children.length || 1)}
    )
  );
  transition: transform 0.2s ease-in-out;
`

const Frame = styled.div`
  width: 100%;
`

export default App
