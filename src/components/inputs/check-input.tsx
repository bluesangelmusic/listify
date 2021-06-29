import React, { useEffect, useContext, useMemo } from 'react'
import { CheckInputConfig } from '../../types'
import { FormContext } from '../form'

export const CheckInput: React.FC<CheckInputConfig> = props => {
  const { state, setProp } = useContext(FormContext)
  const values = useMemo(() => {
    return props.options.reduce((acc, option) => {
      if (option.checked) acc.push(option.value)

      return acc
    }, [] as string[])
  }, [props.options])

  useEffect(() => {
    setProp(props.label, values)
  }, [setProp, props.label, values])

  return (
    <>
      {props.options.map(option => (
        <label
          key={`${props.label}-${option.value}`}
          htmlFor={`${props.label}-${option.value}`}
        >
          <input
            id={`${props.label}-${option.value}`}
            type="checkbox"
            name={props.label}
            value={option.value}
            onChange={e => {
              if (e.target.checked) {
                setProp(props.label, [...state[props.label], option.value])
              } else {
                setProp(
                  props.label,
                  state[props.label].filter(
                    (value: string) => value !== option.value
                  )
                )
              }
            }}
            checked={(state?.[props.label] || []).includes(option.value)}
          />
          {` ${option.label || option.value}`}
        </label>
      ))}
    </>
  )
}
