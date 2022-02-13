import { CardBodyStyle } from "./card_body.style"
import { CardBodyType } from "./card_body.d"

const CardBody = (props : CardBodyType) => {
  return (
    <CardBodyStyle {...props}>
      {props.children}
    </CardBodyStyle>
  )
}

export default CardBody