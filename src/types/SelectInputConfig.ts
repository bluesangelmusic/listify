export interface SelectInputConfig {
  type: 'select'
  label: string
  options: SelectInputOption[]
  defaultValue?: string
}

export interface SelectInputOption {
  value: string
  label?: string
}
