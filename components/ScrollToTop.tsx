// import SvgIcon from "../assets/arrow-up.svg";

import styled from "styled-components";
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import { Up } from "../styled-components/GSAP";

interface Props {
  onClick: () => void;
}

export const ScrollToTop = ({ onClick }: Props) => {
  const ref = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  const scrollUp = () => {
    onClick();
  };

  // useEffect(() => {
  //   const element = ref.current;
  //   gsap.to(element, {
  //     display: "block",
  //     scrollTrigger: {
  //       trigger: element,
  //       start: "top top",
  //       scrub: true,
  //     },
  //   });
  // }, []);

  return (
    <Up onClick={scrollUp}>
      <img src="/arrow-up.svg" alt="to top" />
    </Up>
  );
};
