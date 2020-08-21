import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import TabSelector from './tab-selector'
import TabEditor from './tab-editor'
import defaultTabs from '../static/tabs.json'
import DefaultButton from './button'
import CodeModal from './code-modal'
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
  const [html, setHtml] = useState('')
  const [modalShown, setModalShown] = useState(false)

  useEffect(() => {
    if (activeIndex === 0) setTimeout(() => setActiveTab(null), 200)
  }, [activeIndex])

  const handleTabSelect = id => {
    const selectedTab = tabs.find(tab => tab.id === id)
    if (!selectedTab) return

    setActiveTab(selectedTab)
    setActiveIndex(1)
  }

  const handleTabCreate = () => {
    const newTab = {
      id: uuid(),
      name: 'New Tab',
      content: '',
    }

    setTabs([...tabs, newTab])
    setActiveTab(newTab)
    setActiveIndex(1)
  }

  const handleHomeSelect = () => setActiveIndex(0)

  const generateHtml = () => {
    setHtml(getHtmlFromTabData(tabs))
    setModalShown(true)
  }

  const updateTab = tab => {
    const __tabs = [...tabs]
    const index = __tabs.findIndex(originalTab => tab.id === originalTab.id)

    if (index !== null) {
      __tabs.splice(index, 1, tab)
      setTabs(__tabs)
    }
  }

  const deleteTab = id => {
    const __tabs = [...tabs]
    const index = __tabs.findIndex(tab => tab.id === id)
    __tabs.splice(index, 1)

    setTabs(__tabs)
  }

  const dismissModal = () => setModalShown(false)

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
            <Button onClick={generateHtml}>Generate HTML</Button>
          </Frame>
          <Frame>
            {activeTab && (
              <TabEditor
                tab={activeTab}
                updateTab={updateTab}
                deleteTab={deleteTab}
                back={handleHomeSelect}
              />
            )}
          </Frame>
        </Container>
      </Viewport>
      {modalShown && <CodeModal dismiss={dismissModal}>{html}</CodeModal>}
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

const Button = styled(DefaultButton)`
  font-size: 1rem;
  color: white;
  background: #001659;
  margin-top: 3rem;
`

function getHtmlFromTabData(tabs) {
  const style = `<style>
  :root {
    font-family: Helvetica, Arial, sans-serif;
    box-sizing: border-box;
  }

  .tab-wrapper {
    width: 100%;
    max-width: 768px;
    margin: auto;
  }

  .tab-area {
    display: flex;
  }

  .tab-selector {
    padding: 0.5em 1.5em;
    cursor: pointer;
  }

  .tab-selector.active {
    font-weight: bold;
    cursor: initial;
  }

  .tab-content-area {
    position: relative;
  }

  .tab-content {
    position: absolute;
    top: 0;
    left: 0;
    background: white;
    border: 1px solid #ccc;
    padding: 2rem;
    width: 100%;
    display: none;
  }

  .tab-content.active {
    display: block;
  }

  dl {
    width: 100%;
  }

  dt {
    font-weight: bold;
    float: left;
    margin-right: 0.3rem;
  }
</style>`

  const tabSelectors = ` <div id="tab-area" class="tab-area">
    ${tabs
      .map(
        tab =>
          `<div class="tab-selector" data-target="${tab.id}">${tab.name}</div>`
      )
      .join('')}
  </div>`

  const tabContent = ` <div class="tab-content-area">
    ${tabs
      .map(
        tab => `<div id="${tab.id}" class="tab-content">${tab.content}</div>`
      )
      .join('')}
  </div>`

  const script = `<script>
  window.addEventListener('DOMContentLoaded', function () {
    var tabRow = document.getElementById('tab-area');
    onLoad();
    tabRow.addEventListener('click', function (e) {
      var clickedElement = e.target;
      var clickedElementTarget = clickedElement.getAttribute('data-target');
      setActiveTab(clickedElementTarget);
    });
  });
  function onLoad() {
    var firstSelector = document.getElementsByClassName('tab-selector')[0];
    var target = firstSelector.getAttribute('data-target');
    setActiveTab(target);
  }
  function setActiveTab(id) {
    var tabSelectors = document.getElementsByClassName('tab-selector');
    for (var i = 0; i < tabSelectors.length; i++) {
      var selector = tabSelectors[i];
      var target = selector.getAttribute('data-target');
      var targetElement = document.getElementById(target);
      if (target === id) {
        selector.classList.add('active');
        targetElement.classList.add('active');
      } else {
        selector.classList.remove('active');
        targetElement.classList.remove('active');
      }
    }
  }
</script>`

  const html = `${style}
<div class="tab-wrapper">
  ${tabSelectors}
  ${tabContent}
</div>
${script}`

  return html
}

export default App
