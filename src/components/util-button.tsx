import styled from 'styled-components'
import { Button } from './button'

/**
 * A specialized `<Button>` for inline utility commands.
 */
export const UtilButton = styled(Button)`
  border: none;
  font-size: 1em;
  padding: 0.5em;
  line-height: 0;
  font-weight: bold;
`
