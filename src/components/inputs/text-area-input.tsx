import React, { useEffect, useContext, useMemo } from 'react'
import { TextAreaInputConfig } from '../../types'
import { FormContext } from '../form'

export const TextAreaInput: React.FC<TextAreaInputConfig> = props => {
  const { state, setProp } = useContext(FormContext)
  const defaultValue = useMemo(() => {
    return props.default
  }, [props.default])

  useEffect(() => {
    setProp(props.label, defaultValue)
  }, [setProp, props.label, defaultValue])

  return (
    <textarea
      id={props.label}
      name={props.label}
      value={state[props.label] || ''}
      onChange={e => setProp(props.label, e.target.value)}
      placeholder={props.placeholder}
    />
  )
}
