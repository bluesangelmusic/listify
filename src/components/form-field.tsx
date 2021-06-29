import React from 'react'
import { InputConfig } from '../types'
import FormGroup from './form-group'
import {
  TextInput,
  NumberInput,
  SelectInput,
  RadioInput,
  TextAreaInput,
  CheckInput,
  TextArrayInput,
} from './inputs'

const FormInput: React.FC<InputConfig> = props => {
  let element
  switch (props.type) {
    case 'text':
      element = <TextInput {...props} />
      break
    case 'number':
      element = <NumberInput {...props} />
      break
    case 'select':
      element = <SelectInput {...props} />
      break
    case 'radio':
      element = <RadioInput {...props} />
      break
    case 'textarea':
      element = <TextAreaInput {...props} />
      break
    case 'check':
      element = <CheckInput {...props} />
      break
    case 'text-array':
      element = <TextArrayInput {...props} />
      break
    default:
      return null
  }

  return (
    <FormGroup key={props.label}>
      <label htmlFor={props.label}>{props.label}</label>
      {element}
    </FormGroup>
  )
}

export default FormInput
