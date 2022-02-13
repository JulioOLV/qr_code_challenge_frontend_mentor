import { CardStyle } from "./card.style"
import { CardProps } from "./card.d"

const Card = (props : CardProps) => {
  return (
    <CardStyle {...props}>
      {props.children}
    </CardStyle>
  )
}

export default Card