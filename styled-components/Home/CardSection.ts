import styled from "styled-components";

export const CardSection = styled.div`
  .cards_wrap {
    padding: ${(props) => props.theme.margins.asEms[3]};
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .cards_wrap {
    .card_item {
      padding: ${(props) =>
        `${props.theme.paddings.asEms[0]} ${props.theme.paddings.asEms[0]}`};
      width: calc(100% - ${(props) => props.theme.margins.asEms[3]});
      margin: ${(props) => props.theme.margins.asNumbers[3] / 2 + "em"};
      background-color: ${(props) => props.theme.colors.secondary};

      :hover {
        transform: scale(1.01);
      }
    }

    .card_inner {
      background: ${(props) => props.theme.colors.quaternary};
      border-radius: 5px;
      padding: ${(props) =>
        `${props.theme.paddings.asEms[2]} ${props.theme.paddings.asEms[3]}`};
      width: 100%;
      height: 100%;
    }

    .card_item {
      box-shadow: 1px 1px 2px 1px ${(props) => props.theme.colors.primary};
      cursor: pointer;
      border-radius: 5px;

      img {
        border-radius: 0.5rem 0.5rem 0 0;
        width: 100%;
        height: auto;
        object-fit: cover;
        // height: max(10rem, 25vh);
        max-height: max(10rem, 30vh);
        aspect-ratio: 4/3;
        /* mix-blend-mode: var(--card-blend-mode); */
        // filter: grayscale(100);

        ~ * {
          margin-left: 1rem;
          margin-right: 1rem;
        }
      }

      .title {
        color: ${(props) => props.theme.text.colors.secondary};
        font-weight: 400;
        letter-spacing: 2px;
        /* text-transform: uppercase; */
        text-align: center;
        font-size: ${(props) => props.theme.text.fontSizes[4]};
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin: ${(props) =>
          `${props.theme.margins.asEms[0]} 0 ${props.theme.margins.asEms[0]}`};
      }

      .subtitle {
        color: ${(props) => props.theme.text.colors.secondary};
        font-size: ${(props) => props.theme.text.fontSizes[2]};
        font-weight: 500;
      }

      .description {
        font-size: ${(props) => props.theme.text.fontSizes[1]};
        line-height: ${(props) => props.theme.text.fontSizes[3]};
        color: ${(props) => props.theme.text.colors.secondary};
        margin: ${(props) =>
          `${props.theme.margins.asEms[0]} 0 ${props.theme.margins.asEms[1]}`};
        overflow: auto;
        overflow-wrap: anywhere;
      }
    }
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.sm}) {
    .cards_wrap .card_item {
      width: 50%;
    }
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.md}) {
    .cards_wrap .card_item {
      width: calc(33% - ${(props) => props.theme.margins.asEms[3]});
      margin: ${(props) => {
        return props.theme.margins.asNumbers[3] / 2 + "em";
      }};
    }
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.lg}) {
    .cards_wrap .card_item {
      width: calc(25% - ${(props) => props.theme.margins.asEms[3]});
      margin: ${(props) => props.theme.margins.asNumbers[3] / 2 + "em"};
    }
  }
`;
