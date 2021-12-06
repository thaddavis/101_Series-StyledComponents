import SvgIcon from "../../assets/arrow-up.svg";

import styled from "styled-components";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const Up = styled.div`
  box-sizing: border-box;
  /* margin: 0.2em; */
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
  line-height: 1.5715;
  list-style: none;
  position: fixed;
  right: 100px;
  bottom: 80px;
  z-index: 10;
  cursor: pointer;

  img {
    overflow: visible;

    width: 40px;
    height: 40px;

    border: 2px solid var(--white);
    border-radius: 50%;
    background-color: var(--white);
    transition: transform 0.3s;

    &:hover {
      transform: scale(1.1);
    }
    &:active {
      transform: scale(0.9);
    }
  }
`;
