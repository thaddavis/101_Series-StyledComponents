import styled from "styled-components";

export const Section1 = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.text.colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  scroll-snap-align: start;
  position: relative;
`;
