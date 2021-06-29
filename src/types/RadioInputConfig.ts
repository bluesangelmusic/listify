export interface RadioInputConfig {
  type: 'radio'
  label: string
  options: RadioInputOption[]
  default?: string
}

export interface RadioInputOption {
  value: string
  label?: string
}
