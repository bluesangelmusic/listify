import { useCallback, useContext } from 'react'

import { Button } from '../button'
import { FormContext, FormContextValue } from '../form'
import { Row } from '../row'

interface Props {
  generator: (locals: Record<string, any>, type: 'plaintext' | 'html') => void
}

export const FormControls = ({ generator }: Props) => {
  const { state } = useContext(FormContext)

  const handleClick = useCallback(
    (state: FormContextValue['state'], type: 'plaintext' | 'html') => {
      const locals = { ...state }
      for (const key in locals) {
        if (locals[key] instanceof Array) {
          locals[key] = locals[key].filter(
            (item: any) => typeof item !== 'undefined' && item !== ''
          )
        }

        if (locals[key] instanceof Object) {
          const filtered: Record<any, any> = {}
          for (const entry in locals[key]) {
            if (locals[key][entry] !== undefined && locals[key][entry] !== '') {
              filtered[entry] = locals[key][entry]
            }
          }
          locals[key] = filtered
        }

        generator(locals, type)
      }
    },
    [generator]
  )

  return (
    <Row>
      <Button type="button" onClick={() => handleClick(state, 'plaintext')}>
        BAM / Reverb
      </Button>
      <Button type="button" onClick={() => handleClick(state, 'html')}>
        eBay
      </Button>
    </Row>
  )
}
