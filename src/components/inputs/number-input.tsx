import { useEffect, useContext } from 'react'
import { NumberInputConfig } from '../../types'
import { FormContext } from '../form'

/**
 * A custom number input.
 *
 * @param {NumberInputConfig} props
 */
export const NumberInput = ({
  label,
  defaultValue,
  placeholder,
}: NumberInputConfig) => {
  const { state, setProp } = useContext(FormContext)

  useEffect(() => {
    setProp(label, defaultValue)
  }, [setProp, label, defaultValue])

  return (
    <input
      id={label}
      type="number"
      name={label}
      value={label in state ? state[label] : defaultValue}
      onChange={e => {
        if (!e.target.validity.badInput) {
          if (e.target.value.length) {
            setProp(label, e.target.value)
          } else {
            setProp(label, defaultValue)
          }
        }
      }}
      placeholder={placeholder}
    />
  )
}
