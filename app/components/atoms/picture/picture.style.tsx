import styled from 'styled-components'
import Image from 'next/image'
import { PictureProps } from './picture.d'

export const PictureStyle = styled(Image)`
  border-radius: ${(props : PictureProps) => props.borderradius};
`