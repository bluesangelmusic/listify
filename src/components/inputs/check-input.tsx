import { useEffect, useContext, useMemo } from 'react'
import { CheckInputConfig } from '../../types'
import { FormContext } from '../form'

/**
 * A custom checkbox input.
 *
 * @param {CheckInputConfig} props
 */
export const CheckInput = ({ label, options }: CheckInputConfig) => {
  const { state, setProp } = useContext(FormContext)
  const values = useMemo(() => {
    return options.reduce((acc, option) => {
      if (option.checked) acc.push(option.value)

      return acc
    }, [] as string[])
  }, [options])

  useEffect(() => {
    setProp(label, values)
  }, [setProp, label, values])

  return (
    <>
      {options.map(option => (
        <label
          key={`${label}-${option.value}`}
          htmlFor={`${label}-${option.value}`}
        >
          <input
            id={`${label}-${option.value}`}
            type="checkbox"
            name={label}
            value={option.value}
            onChange={e => {
              if (e.target.checked) {
                setProp(label, [...state[label], option.value])
              } else {
                setProp(
                  label,
                  state[label].filter((value: string) => value !== option.value)
                )
              }
            }}
            checked={(state?.[label] || []).includes(option.value)}
          />
          {` ${option.label || option.value}`}
        </label>
      ))}
    </>
  )
}
