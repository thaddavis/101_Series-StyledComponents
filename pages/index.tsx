import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { Normalize } from "styled-normalize";
import { CardSection, HeroSection } from "../styled-components/Home";

const Home: NextPage = () => {
  const router = useRouter();

  const tutorials = [
    {
      title: "Inline vs Block",
      level: "Easy",
      description:
        "A visual demo for seeing all the block and inline html elements in action.",
      href: "inline-vs-block",
      img: "/inline-vs-block.png",
    },
    {
      title: "CSS Grid",
      level: "Medium",
      description: "Have you played around with CSS Grid?",
      href: "css-grid",
      img: "/css-grid.png",
    },
    {
      title: "GSAP",
      level: "Hard",
      description: "It really not that advanced :)",
      href: "gsap",
      img: "/gsap.png",
    },
  ];

  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by COMMAND" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Normalize />

      <HeroSection>
        <div className="hero-section">
          <div className="hero-section-text">
            <h1>COMMAND</h1>
            <h5>Software Engineering</h5>
          </div>
        </div>
      </HeroSection>
      <CardSection>
        <div className="cards_wrap">
          {tutorials.map((i, idx) => {
            return (
              <div
                key={i.title}
                className="card_item"
                onClick={() => {
                  router.push(i.href);
                }}
              >
                <div className="card_inner">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <img alt="Card Image" src={i.img} />
                  </div>
                  <div className="title">{i.title}</div>
                  <div className="description">{i.description}</div>
                </div>
              </div>
            );
          })}
        </div>
      </CardSection>
    </>
  );
};

export default Home;
