import styled from "styled-components"

export const MainStyle = styled.main`
  background-color: ${(props) => props.theme.colors.lightGray};
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;