import styled from "styled-components";

export const Section3 = styled.div`
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.text.colors.tertiary};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  scroll-snap-align: start;
  position: relative;
`;
