import { CardHeaderStyle } from "./card_header.style"
import { CardHeaderProps } from "./card_header.d"

const CardHeader = (props : CardHeaderProps) => {
  return (
    <CardHeaderStyle {...props}>
      {props.children}
    </CardHeaderStyle>
  )
}

export default CardHeader