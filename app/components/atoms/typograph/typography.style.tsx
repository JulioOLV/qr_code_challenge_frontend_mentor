import styled from 'styled-components'
import { TypographyProps } from './typography.d'

export const TypographyStyle = styled.p`
  font-size: ${({ modifier } : TypographyProps) => modifier};
  font-weight: ${({ weight } : TypographyProps) => weight};
`