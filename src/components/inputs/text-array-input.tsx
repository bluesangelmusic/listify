import React, { useEffect, useContext, useMemo } from 'react'
import { TextArrayInputConfig } from '../../types'
import { v4 as uuid } from 'uuid'
import { FormContext } from '../form'
import Row from '../row'
import UtilButton from '../util-button'

export const TextArrayInput: React.FC<TextArrayInputConfig> = props => {
  const { state, setProp } = useContext(FormContext)
  const values = useMemo(() => {
    return (props.defaults || []).reduce((acc, value) => {
      acc[uuid()] = value

      return acc
    }, {} as { [key: string]: any })
  }, [props.defaults])

  useEffect(() => {
    setProp(props.label, values)
  }, [setProp, props.label, values])

  return (
    <>
      {Object.keys(state?.[props.label] || {}).map(key => (
        <Row key={key}>
          <UtilButton
            type="button"
            onClick={() => {
              const __fields = { ...state[props.label] }
              delete __fields[key]

              setProp(props.label, __fields)
            }}
          >
            &times;
          </UtilButton>
          <input
            id={key}
            type="text"
            name={`${props.label}-${key}`}
            value={state[props.label][key]}
            onChange={e => {
              const __fields = { ...state[props.label] }
              __fields[key] = e.target.value

              setProp(props.label, __fields)
            }}
            placeholder={props.placeholder}
          />
        </Row>
      ))}
      <Row>
        <UtilButton
          type="button"
          onClick={() => {
            setProp(props.label, {
              ...state?.[props.label],
              [uuid()]: '',
            })
          }}
        >
          +
        </UtilButton>
      </Row>
    </>
  )
}
