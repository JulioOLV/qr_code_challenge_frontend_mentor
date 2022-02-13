import styled from 'styled-components'
import { CardHeaderProps } from './card_header.d'

export const CardHeaderStyle = styled.div`
  margin: ${({ margin } : CardHeaderProps) => margin};
`