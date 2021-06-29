import {
  TextInputConfig,
  NumberInputConfig,
  TextAreaInputConfig,
  SelectInputConfig,
  RadioInputConfig,
  CheckInputConfig,
  TextArrayInputConfig,
} from '.'

export type InputConfig =
  | TextInputConfig
  | NumberInputConfig
  | TextAreaInputConfig
  | SelectInputConfig
  | RadioInputConfig
  | CheckInputConfig
  | TextArrayInputConfig
