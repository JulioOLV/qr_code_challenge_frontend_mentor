import { useTheme } from "styled-components"
import { IQRCodeTheme } from "../../../../styles/theme.d"
import Picture from "../../atoms/picture/picture"
import CardHeader from "../../molecules/card_header/card_header"
import { CardBodyStyle, CardStyle, QrCodeChallengeStyle, SubTitleStyle, TitleStyle } from "./qr_code_challenge.style"
import { QrCodeChallengeProps } from "./qr_code_challenge.d"

const QrCodeChallenge = (props : QrCodeChallengeProps) => {
  const theme : IQRCodeTheme = (useTheme() as IQRCodeTheme)

  return (
    <QrCodeChallengeStyle>
      <CardStyle>
        <CardHeader>
          <Picture src={props.imageSrc} width="250px" height="250px" borderradius="8px" />
        </CardHeader>
        <CardBodyStyle>
          <TitleStyle modifier={theme.font.size.medium} weight={theme.font.weight.bold}>
            {props.titleCardText}
          </TitleStyle>
          <SubTitleStyle modifier={theme.font.size.small} weight={theme.font.weight.normal}>
            {props.subTitleCardText}
          </SubTitleStyle>
        </CardBodyStyle>
      </CardStyle>
    </QrCodeChallengeStyle>
  )
}

export default QrCodeChallenge