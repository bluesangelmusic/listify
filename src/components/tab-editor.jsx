import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Editor } from 'react-draft-wysiwyg'
import { EditorState, ContentState, convertToRaw } from 'draft-js'
import Button from './button'
import EditorButtons from './editor-buttons'
import draftToHtml from 'draftjs-to-html'
import htmlToDraft from 'html-to-draftjs'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

const TabEditor = props => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty())
  const [name, setName] = useState(props.tab.name)

  useEffect(() => {
    setName(props.tab.name)
  }, [props.tab.name])

  useEffect(() => {
    const __editorState = getEditorStateFromContent(props.tab.content)
    if (__editorState) setEditorState(__editorState)
  }, [props.tab.content])

  const save = () => {
    const raw = convertToRaw(editorState.getCurrentContent())
    const content = draftToHtml(raw)

    props.updateTab({
      id: props.tab.id,
      name,
      content,
    })
    props.back()
  }

  const reset = () => {
    setName(props.tab.name)

    const __editorState = getEditorStateFromContent(props.tab.content)
    if (__editorState) setEditorState(__editorState)
  }

  return (
    <Wrapper>
      <Button onClick={props.back}>Back</Button>
      <Input value={name} onChange={e => setName(e.target.value)} />
      <Editor
        editorState={editorState}
        onEditorStateChange={setEditorState}
        editorStyle={{
          border: '1px solid #f1f1ff',
          padding: '0 1rem',
          height: '10rem',
          overflow: 'auto',
        }}
      />
      <EditorButtons save={save} reset={reset} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;

  & > * {
    margin: 1rem;
  }
`

const Input = styled.input`
  font-size: 1.2rem;
  padding: 0.3em 0.8em;
`

function getEditorStateFromContent(content) {
  const contentBlock = htmlToDraft(content)
  if (contentBlock) {
    const contentState = ContentState.createFromBlockArray(
      contentBlock.contentBlocks
    )
    const editorState = EditorState.createWithContent(contentState)
    return editorState
  } else {
    return null
  }
}

export default TabEditor
