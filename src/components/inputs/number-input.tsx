import { useEffect, useContext, useMemo } from 'react'
import { NumberInputConfig } from '../../types'
import { FormContext } from '../form'

export const NumberInput = (props: NumberInputConfig) => {
  const { state, setProp } = useContext(FormContext)
  const defaultValue = useMemo(() => {
    return props.default || '1'
  }, [props.default])

  useEffect(() => {
    setProp(props.label, defaultValue)
  }, [setProp, props.label, defaultValue])

  return (
    <input
      id={props.label}
      type="number"
      name={props.label}
      value={props.label in state ? state[props.label] : defaultValue}
      onChange={e => {
        if (!e.target.validity.badInput) {
          if (e.target.value.length) {
            setProp(props.label, e.target.value)
          } else {
            setProp(props.label, defaultValue)
          }
        }
      }}
      placeholder={props.placeholder}
    />
  )
}
