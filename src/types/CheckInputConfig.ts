export interface CheckInputConfig {
  type: 'check'
  label: string
  options: CheckInputOption[]
}

export interface CheckInputOption {
  value: string
  label?: string
  checked?: boolean
}
