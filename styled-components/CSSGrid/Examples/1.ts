import styled from "styled-components";

export const GridExample1 = styled.div`
  --grid-column-count-mobile: 3;
  --grid-column-count-tablet: 2;
  --grid-column-count-desktop: 3;
  --grid-column-gap: ${(props) => props.theme.margins.asEms[2]};
  --grid-row-gap: ${(props) => props.theme.margins.asEms[2]};
  --grid-item-width-mobile: calc(calc(100% / var(--grid-column-count-mobile)));
  --grid-item-width-tablet: calc(
    calc(100% / var(--grid-column-count-tablet)) - var(--grid-column-gap) * 2 /
      var(--grid-column-count-tablet)
  );
  --grid-item-width-desktop: calc(
    calc(100% / var(--grid-column-count-desktop)) - var(--grid-column-gap) * 2 /
      var(--grid-column-count-desktop)
  );

  display: grid;
  grid-template-columns: repeat(
    var(--grid-column-count-mobile),
    var(--grid-item-width-mobile)
  );
  grid-auto-rows: 1fr;
  grid-column-gap: var(--grid-column-gap);
  grid-row-gap: var(--grid-row-gap);
  background-color: ${(props) => props.theme.colors.primary};
  margin: ${(props) => props.theme.margins.asEms[0]};

  .item {
    color: ${(props) => props.theme.text.colors.secondary};
    text-transform: uppercase;
    font-size: ${(props) => props.theme.text.fontSizes[1]};
    background-color: ${(props) => props.theme.colors.secondary};

    max-height: 33.33vh;

    display: flex;
    justify-content: center;
    align-items: center;

    text-align: center;

    overflow: auto;
    overflow-wrap: anywhere;
    text-overflow: ellipsis;
    padding: ${(props) => props.theme.margins.asEms[0]};
    margin: ${(props) => props.theme.margins.asEms[0]};
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.sm}) {
    grid-template-columns: repeat(
      var(--grid-column-count-tablet),
      var(--grid-item-width-tablet)
    );
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.md}) {
    grid-template-columns: repeat(
      var(--grid-column-count-desktop),
      var(--grid-item-width-desktop)
    );
  }
`;
