import { TypographyStyle } from './typography.style'
import { TypographyProps } from './typography.d'

const Typography = (props : TypographyProps) => {
  return (
    <TypographyStyle {...props}>
      {props.children}
    </TypographyStyle>
  )
}

export default Typography