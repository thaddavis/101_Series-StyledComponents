import styled from "styled-components";

export const Container = styled.div`
  overflow-y: scroll;
  height: 100vh;
  scroll-snap-type: mandatory;
  scroll-snap-points-y: repeat(100vh);
  scroll-snap-type: y mandatory;
`;
