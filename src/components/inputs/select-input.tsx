import React, { useEffect, useContext, useMemo } from 'react'
import { SelectInputConfig } from '../../types'
import { FormContext } from '../form'

export const SelectInput: React.FC<SelectInputConfig> = props => {
  const { state, setProp } = useContext(FormContext)
  const defaultValue = useMemo(() => {
    return props.default
  }, [props.default])

  useEffect(() => {
    setProp(props.label, defaultValue)
  }, [setProp, props.label, defaultValue])

  return (
    <select
      id={props.label}
      name={props.label}
      value={state[props.label] || ''}
      onChange={e => setProp(props.label, e.target.value)}
    >
      {props.options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label || option.value}
        </option>
      ))}
    </select>
  )
}
