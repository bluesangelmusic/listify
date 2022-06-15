import { useEffect, useContext } from 'react'
import { RadioInputConfig } from '../../types'
import { FormContext } from '../form'

/**
 * A custom radio set.
 *
 * @param {RadioInputConfig} props
 */
export const RadioInput = ({
  label,
  options,
  defaultValue,
}: RadioInputConfig) => {
  const { state, setProp } = useContext(FormContext)

  useEffect(() => {
    setProp(label, defaultValue)
  }, [setProp, label, defaultValue])

  return (
    <>
      {options.map(option => (
        <label
          key={`${label}-${option.value}`}
          htmlFor={`${label}-${option.value}`}
        >
          <input
            id={`${label}-${option.value}`}
            type="radio"
            name={label}
            value={option.value}
            onChange={e => setProp(label, e.target.value)}
            checked={state?.[label] === option.value}
          />
          {` ${option.label || option.value}`}
        </label>
      ))}
    </>
  )
}
