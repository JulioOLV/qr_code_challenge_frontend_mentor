import { IQRCodeTheme } from "./theme.d";

const QRCodeTheme : IQRCodeTheme = {
  colors: {
    white: 'hsl(0, 0%, 100%)',
    lightGray: 'hsl(212, 45%, 89%)',
    grayishBlue: 'hsl(220, 15%, 55%)',
    darkBlue: 'hsl(218, 44%, 22%)'
  },
  font: {
    size: {
      large: '24px',
      medium: '16px',
      small: '12px'
    },
    family: '"Outfit", sans-serif',
    weight: {
      bold: '700',
      normal: '400'
    }
  }
};

export { QRCodeTheme }