import { createContext, FormEvent, PropsWithChildren, useCallback, useState } from 'react'

export interface FormContextValue {
  state: Record<string, any>
  setProp: (prop: string, value: any) => void
}

export interface FormProps extends PropsWithChildren<any> {
  onSubmit?: (state: Record<string, any>) => void
}

/**
 * The FormContext wrapper element.
 */
export const FormContext = createContext<FormContextValue>({
  state: {},
  setProp: () => null,
})

/**
 * An HTML `<form>` element wrapped in the FormContext provider.
 *
 * @param {FormProps} props
 */
export const Form = ({ onSubmit, children }: FormProps) => {
  const [state, setState] = useState<Record<string, any>>({})

  /**
   * Updates the FormContext state to include the given `key: value` pair,
   * overwriting existing data if necessary.
   *
   * @param {string} key - The key to which the `value` should be assigned.
   * @param {any} value - The value being assigned to the `key`.
   */
  const setProp = useCallback((key: string, value: any) => {
    setState(state => {
      const __state = { ...state }
      __state[key] = value

      return __state
    })
  }, [])

  /**
   * Wrapper function for preventing the default form submission and calling
   * the `onSubmit()` handler.
   *
   * @param {FormEvent} e - The native form submission event.
   * @param {Record<string, any>} state - The form state at the time of submission.
   */
  const handleSubmit = useCallback(
    (e: FormEvent, state: Record<string, any>) => {
      e.preventDefault()

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
      }

      if (onSubmit) {
        onSubmit(locals)
      }
    },
    [onSubmit]
  )

  return (
    <FormContext.Provider value={{ state, setProp }}>
      <form onSubmit={e => handleSubmit(e, state)}>{children}</form>
    </FormContext.Provider>
  )
}
