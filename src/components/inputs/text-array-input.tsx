import { useEffect, useContext, useMemo } from 'react'
import { TextArrayInputConfig } from '../../types'
import { FormContext } from '../form'
import { Row } from '../row'
import { UtilButton } from '../util-button'

let id = 0

/**
 * An expandable array of custom text inputs.
 *
 * @param {TextArrayInputConfig} props
 */
export const TextArrayInput = ({
  label,
  defaultValues,
  placeholder,
}: TextArrayInputConfig) => {
  const { state, setProp } = useContext(FormContext)
  const values = useMemo(() => {
    return (defaultValues || []).reduce((acc, value) => {
      acc[id++] = value

      return acc
    }, {} as { [key: string]: any })
  }, [defaultValues])

  useEffect(() => {
    setProp(label, values)
  }, [setProp, label, values])

  return (
    <>
      {Object.keys(state?.[label] || {}).map(key => (
        <Row key={key}>
          <UtilButton
            type="button"
            onClick={() => {
              const __fields = { ...state[label] }
              delete __fields[key]

              setProp(label, __fields)
            }}
          >
            &times;
          </UtilButton>
          <input
            id={key}
            type="text"
            name={`${label}-${key}`}
            value={state[label][key]}
            onChange={e => {
              const __fields = { ...state[label] }
              __fields[key] = e.target.value

              setProp(label, __fields)
            }}
            placeholder={placeholder}
          />
        </Row>
      ))}
      <Row>
        <UtilButton
          type="button"
          onClick={() => {
            setProp(label, {
              ...state?.[label],
              [id++]: '',
            })
          }}
        >
          +
        </UtilButton>
      </Row>
    </>
  )
}
