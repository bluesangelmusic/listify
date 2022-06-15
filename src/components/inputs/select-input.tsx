import { useEffect, useContext } from 'react'
import { SelectInputConfig } from '../../types'
import { FormContext } from '../form'

/**
 * A custom select element.
 *
 * @param {SelectInputConfig} props
 */
export const SelectInput = ({
  label,
  options,
  defaultValue,
}: SelectInputConfig) => {
  const { state, setProp } = useContext(FormContext)

  useEffect(() => {
    setProp(label, defaultValue)
  }, [setProp, label, defaultValue])

  return (
    <select
      id={label}
      name={label}
      value={state[label] || ''}
      onChange={e => setProp(label, e.target.value)}
    >
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label || option.value}
        </option>
      ))}
    </select>
  )
}
