import { PictureStyle } from './picture.style'
import { PictureProps } from './picture.d'

const Picture = (props : PictureProps) => {
  return (
    <PictureStyle {...props} />
  )
}

export default Picture;