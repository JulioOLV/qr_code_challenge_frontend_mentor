import styled from "styled-components"
import { CardBodyType } from "./card_body.d"

export const CardBodyStyle = styled.div`
  display: ${({ display } : CardBodyType) => display};
  align-items: ${({ alignItems } : CardBodyType) => alignItems};
  justify-content: ${({ justifyContent }) => justifyContent};
  flex-direction: ${({ flexDirection } : CardBodyType) => flexDirection};
`