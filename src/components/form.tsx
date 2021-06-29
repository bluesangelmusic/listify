import React, { PropsWithChildren, useState, useCallback } from 'react'

export type FormState = { [key: string]: any }

export interface FormContextValue {
  state: FormState
  setProp: (prop: string, value: any) => void
}

export interface FormProps extends PropsWithChildren<any> {
  onSubmit: (state: FormState) => void
}

export const FormContext = React.createContext<FormContextValue>({
  state: {},
  setProp: () => null,
})

const Form: React.FC<FormProps> = props => {
  const [state, setState] = useState<FormState>({})

  const setProp = useCallback((prop: string, value: any) => {
    setState(state => {
      const __state = { ...state }
      __state[prop] = value

      return __state
    })
  }, [])

  return (
    <FormContext.Provider value={{ state, setProp }}>
      <form
        onSubmit={e => {
          e.preventDefault()
          props.onSubmit(state)
        }}
      >
        {props.children}
      </form>
    </FormContext.Provider>
  )
}

export default Form
