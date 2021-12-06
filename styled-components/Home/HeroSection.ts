import styled from "styled-components";

export const HeroSection = styled.div`
  --hero-height: 60vh;

  .hero-section {
    background-color: ${(props) => props.theme.colors.primary};

    min-height: var(--hero-height);
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;

    .hero-section-text {
      color: ${(props) => props.theme.text.colors.primary};
      font-size: ${(props) => props.theme.text.fontSizes[5]};
      text-shadow: 1px 1px 2px black;
    }
  }
`;
