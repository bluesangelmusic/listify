import { useMemo } from 'react'
import { InputConfig } from '../types'
import { FormGroup } from './form-group'
import {
  TextInput,
  NumberInput,
  SelectInput,
  RadioInput,
  TextAreaInput,
  CheckInput,
  TextArrayInput,
} from './inputs'

/**
 * A form input with a label.
 *
 * @param {InputConfig} props - Props to be passed to the rendered element.
 * @returns The appropriate custom element for the value of the `type` prop.
 */
export const FormField = (props: InputConfig) => {
  const element = useMemo(() => {
    switch (props.type) {
      case 'text':
        return <TextInput {...props} />
      case 'number':
        return <NumberInput {...props} />
      case 'select':
        return <SelectInput {...props} />
      case 'radio':
        return <RadioInput {...props} />
      case 'textarea':
        return <TextAreaInput {...props} />
      case 'check':
        return <CheckInput {...props} />
      case 'text-array':
        return <TextArrayInput {...props} />
      default:
        return null
    }
  }, [props])

  return (
    <FormGroup>
      <label htmlFor={props.label}>{props.label}</label>
      {element}
    </FormGroup>
  )
}
