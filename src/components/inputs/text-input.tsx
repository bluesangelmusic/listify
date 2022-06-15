import { useEffect, useContext } from 'react'
import { TextInputConfig } from '../../types'
import { FormContext } from '../form'

/**
 * A custom text input.
 *
 * @param props
 */
export const TextInput = ({
  label,
  defaultValue,
  placeholder,
}: TextInputConfig) => {
  const { state, setProp } = useContext(FormContext)

  useEffect(() => {
    setProp(label, defaultValue)
  }, [setProp, label, defaultValue])

  return (
    <input
      id={label}
      type="text"
      name={label}
      value={state[label] || ''}
      onChange={e => setProp(label, e.target.value)}
      placeholder={placeholder}
    />
  )
}
