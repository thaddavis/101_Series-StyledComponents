import styled from "styled-components";

export const GridExample2 = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  height: 100%;
  margin: 0;
  padding: 0;

  .item {
    color: ${(props) => props.theme.text.colors.primary};
    text-transform: uppercase;
    font-size: 12px;
    background-color: ${(props) => props.theme.colors.primary};
    border: 1px solid ${(props) => props.theme.colors.tertiary};
    display: flex;
    justify-content: center;
    align-items: center;

    overflow-wrap: anywhere;
    padding: ${(props) => props.theme.margins.asEms[1]};
    margin: ${(props) => props.theme.margins.asEms[1]};
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.sm}) {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.md}) {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr);
  }
`;
