import styled from 'styled-components'
import Typography from '../../atoms/typograph/typography';
import CardBody from "../../molecules/card_body/card_body"
import Card from '../../organisms/card/card';

export const QrCodeChallengeStyle = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const CardBodyStyle = styled(CardBody)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const CardStyle = styled(Card)`
  max-width: 250px;
`;

export const TitleStyle = styled(Typography)`
  padding: 20px;
  color: ${(props) => props.theme.colors.darkBlue};
  text-align: center;
`

export const SubTitleStyle = styled(Typography)`
  padding: 0 20px 20px 20px;
  color: ${(props) => props.theme.colors.grayishBlue};
  text-align: center;
`