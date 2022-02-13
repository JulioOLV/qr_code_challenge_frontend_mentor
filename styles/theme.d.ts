import { DefaultTheme } from "styled-components";

export interface IQRCodeTheme extends DefaultTheme {
  colors: Colors,
  font: Font,
}

export interface Colors {
  white: string,
  lightGray: string,
  grayishBlue: string,
  darkBlue: string
}

export interface Font {
  size: Size,
  family: string,
  weight: Weight
}

export interface Size {
  large: string,
  medium: string,
  small: string
}

export interface Weight {
  bold: string,
  normal: string
}