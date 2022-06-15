import { useEffect, useContext } from 'react'
import { TextAreaInputConfig } from '../../types'
import { FormContext } from '../form'

/**
 * A custom textarea.
 *
 * @param {TextAreaInputConfig} props
 */
export const TextAreaInput = ({
  label,
  defaultValue,
  placeholder,
}: TextAreaInputConfig) => {
  const { state, setProp } = useContext(FormContext)

  useEffect(() => {
    setProp(label, defaultValue)
  }, [setProp, label, defaultValue])

  return (
    <textarea
      id={label}
      name={label}
      value={state[label] || ''}
      onChange={e => setProp(label, e.target.value)}
      placeholder={placeholder}
    />
  )
}
