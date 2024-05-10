import pug from 'pug'
import { useCallback, useMemo, useState } from 'react'
import styled from 'styled-components'

import fields from '../static/form.json'
import htmlTemplate from '../static/template-styled.pug'
import plainTextTemplate from '../static/template-text.pug'
import { InputConfig } from '../types'
import { CodeModal } from './code-modal'
import { Form } from './form'
import { FormField } from './form-field'
import { FormControls } from './inputs/form-controls'

const toHTML = pug.compile(htmlTemplate.toString())
const toPlainText = pug.compile(plainTextTemplate.toString())

/**
 * The root element for the app.
 */
export const App = () => {
  const [output, setOutput] = useState<string>('')
  const [outputType, setOutputType] = useState<'plaintext' | 'html'>(
    'plaintext'
  )
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
   * Insert the form values into the Pug template and store the generated output,
   * then show the code modal.
   */
  const generateOutput = useCallback(
    (locals: Record<string, any>, type: 'plaintext' | 'html') => {
      try {
        switch (type) {
          case 'plaintext':
            setOutput(toPlainText(locals).replace(/[\r\n]+/g, '\n'))
            setOutputType('plaintext')
            break
          case 'html':
            setOutput(toHTML(locals))
            setOutputType('html')
            break
          default:
            throw new Error('Invalid template type')
        }
        showModal()
      } catch (error) {
        console.error(error)
        if (error instanceof Error) {
          window.alert(
            error?.name !== 'Error'
              ? `An error occurred: ${error.name}`
              : error.message
              ? `An error occurred:
              
                ${error.message}`
              : `An unknown error occurred.`
          )
        }
      }
    },
    [showModal]
  )

  const modalProps = useMemo(() => {
    return {
      children: outputType === 'html' ? output : undefined,
      dangerouslySetInnerHTML:
        outputType === 'plaintext' ? { __html: output } : undefined,
    }
  }, [output, outputType])

  return (
    <Wrapper>
      <Form>
        {(fields as InputConfig[]).map(field => {
          return <FormField key={field.label} {...field} />
        })}
        <FormControls generator={generateOutput} />
      </Form>
      {modalShown && <CodeModal dismiss={dismissModal} {...modalProps} />}
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
