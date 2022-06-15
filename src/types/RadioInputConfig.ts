export interface RadioInputConfig {
  type: 'radio'
  label: string
  options: RadioInputOption[]
  defaultValue?: string
}

export interface RadioInputOption {
  value: string
  label?: string
}
