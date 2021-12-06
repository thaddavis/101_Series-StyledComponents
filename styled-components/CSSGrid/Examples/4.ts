import styled from "styled-components";

export const GridExample4 = styled.div`
  display: grid;
  grid-template-columns: [first] 40px [line2] 50px [line3] auto [col4-start] 50px [five] 40px [end];
  grid-template-rows: [row1-start] 25% [row1-end] 100px [third-line] auto [last-line];

  .item {
    border: 1px solid ${(props) => props.theme.colors.tertiary};
  }

  .item-1 {
    background-color: ${(props) => props.theme.colors.secondary};
    grid-column-start: 2;
    grid-column-end: five;
    grid-row-start: row1-start;
    grid-row-end: 3;
  }

  .item-3 {
    grid-column-start: first;
    grid-column-end: five;
    grid-row-start: row1-start;
    grid-row-end: 3;
  }

  .item-5 {
    grid-column-start: line-2;
    grid-column-end: end;
    grid-row-start: row1-start;
    grid-row-end: 3;
  }

  .item-7 {
    background-color: ${(props) => props.theme.colors.primary};
    grid-column-start: line-2;
    grid-column-end: end;
    grid-row-start: row1-start;
    grid-row-end: 3;
  }

  .item-9 {
    background-color: ${(props) => props.theme.colors.tertiary};
    color: ${(props) => props.theme.text.colors.primary};
  }
`;
