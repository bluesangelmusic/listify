import React, { useEffect, useContext, useMemo } from 'react'
import { RadioInputConfig } from '../../types'
import { FormContext } from '../form'

export const RadioInput: React.FC<RadioInputConfig> = props => {
  const { state, setProp } = useContext(FormContext)
  const defaultValue = useMemo(() => {
    return props.default
  }, [props.default])

  useEffect(() => {
    setProp(props.label, defaultValue)
  }, [setProp, props.label, defaultValue])

  return (
    <>
      {props.options.map(option => (
        <label
          key={`${props.label}-${option.value}`}
          htmlFor={`${props.label}-${option.value}`}
        >
          <input
            id={`${props.label}-${option.value}`}
            type="radio"
            name={props.label}
            value={option.value}
            onChange={e => setProp(props.label, e.target.value)}
            checked={state?.[props.label] === option.value}
          />
          {` ${option.label || option.value}`}
        </label>
      ))}
    </>
  )
}
