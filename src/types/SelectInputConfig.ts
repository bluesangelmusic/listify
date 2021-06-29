export interface SelectInputConfig {
  type: 'select'
  label: string
  options: SelectInputOption[]
  default?: string
}

export interface SelectInputOption {
  value: string
  label?: string
}
