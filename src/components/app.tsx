import { useState, useCallback } from 'react'
import styled from 'styled-components'
import { Button as DefaultButton } from './button'
import { CodeModal } from './code-modal'
import { InputConfig } from '../types'
import { Form } from './form'
import { FormField } from './form-field'
import fields from '../static/form.json'
import template from '../static/template.pug'
import pug from 'pug'

/**
 * The root element for the app.
 */
export const App = () => {
  const [html, setHtml] = useState<string>('')
  const [modalShown, setModalShown] = useState<boolean>(false)

  /**
   * Show the HTML modal.
   */
  const showModal = useCallback(() => setModalShown(true), [])

  /**
   * Hide the HTML modal.
   */
  const dismissModal = useCallback(() => setModalShown(false), [])

  /**
   * Insert the form values into the Pug template and store the generated HTML,
   * then show the code modal.
   */
  const generateHtml = useCallback(
    (state: Record<string, any>) => {
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
