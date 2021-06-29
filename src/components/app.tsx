import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import DefaultButton from './button'
import CodeModal from './code-modal'
import { InputConfig } from '../types'
import Form from './form'
import FormField from './form-field'
import fields from '../static/form.json'
import template from '../static/template.pug'
import pug from 'pug'

const App = () => {
  const [html, setHtml] = useState<string>('')
  const [modalShown, setModalShown] = useState<boolean>(false)

  const showModal = useCallback(() => setModalShown(true), [])

  const dismissModal = useCallback(() => setModalShown(false), [])

  const generateHtml = useCallback(
    state => {
      setHtml(pug.render(template.toString(), state))
      showModal()
    },
    [showModal]
  )

  return (
    <Wrapper>
      <Form onSubmit={generateHtml}>
        {(fields as InputConfig[]).map(field => {
          return <FormField key={field.label} {...field} />
        })}
        <Button type="submit">Generate HTML</Button>
      </Form>
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
  margin: 5rem auto;
`

const Button = styled(DefaultButton)`
  font-size: 1rem;
  color: white;
  background: #001659;
  margin-top: 3rem;
`

export default App
