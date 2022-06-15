import { useEffect, useContext, useMemo } from 'react'
import { TextInputConfig } from '../../types'
import { FormContext } from '../form'

export const TextInput = (props: TextInputConfig) => {
  const { state, setProp } = useContext(FormContext)
  const defaultValue = useMemo(() => {
    return props.default
  }, [props.default])

  useEffect(() => {
    setProp(props.label, defaultValue)
  }, [setProp, props.label, defaultValue])

  return (
    <input
      id={props.label}
      type="text"
      name={props.label}
      value={state[props.label] || ''}
      onChange={e => setProp(props.label, e.target.value)}
      placeholder={props.placeholder}
    />
  )
}
