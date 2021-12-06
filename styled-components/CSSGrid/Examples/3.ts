import styled from "styled-components";

export const GridExample3 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 10vh 80vh 10vh;
  /* grid-template-rows: auto; */
  grid-template-areas:
    "header header header header"
    "main main main sidebar"
    "footer footer footer footer";

  .item {
    overflow: auto;
    overflow-wrap: anywhere;
  }

  .item-a {
    grid-area: header;
    background-color: ${(props) => props.theme.colors.primary};
  }
  .item-b {
    grid-area: main;
    background-color: ${(props) => props.theme.colors.secondary};
  }
  .item-c {
    grid-area: sidebar;
    color: ${(props) => props.theme.text.colors.tertiary};
    background-color: ${(props) => props.theme.colors.quaternary};
  }
  .item-d {
    grid-area: footer;
    background-color: ${(props) => props.theme.colors.primary};
  }
`;
