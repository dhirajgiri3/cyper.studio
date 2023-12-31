import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Button from "@/Components/Common/Buttons/Button";
import { motion } from "framer-motion";
import { isIOS, isAndroid, isWindows } from "react-device-detect";

const FirstSectioncontainer = styled(motion.div)`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  z-index: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1024px) {
    height: 70vh;
  }

  @media screen and (max-width: 768px) {
    height: 100vh;
  }

  .bgvideo {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;

    video {
      width: 100%;
      height: 100%;
      object-fit: contain;
      opacity: 0.7;

      @media screen and (max-width: 768px) {
        object-fit: cover;
      }
    }
  }

  .container {
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    width: 100%;
    height: 88vh;
    margin-top: 12vh;
    display: flex;
    padding: 2.5rem 10rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2rem;
    text-align: center;

    @media screen and (max-width: 1024px) {
      height: 64vh;
      padding: 2.5rem 5rem;
    }

    @media screen and (max-width: 768px) {
      padding: 2.5rem 1rem;
      height: 88vh;
    }

    h1 {
      font-family: var(--heading-font);
      font-size: var(--large);
      color: var(--white);

      @media screen and (max-width: 768px) {
        font-size: 3rem;
      }

      @media screen and (max-width: 380px) {
        font-size: 2.8rem;
      }

      .studio {
        display: flex;
        gap: 1rem;
        align-items: center;
        justify-content: center;

        a {
          text-decoration: none;

          .span {
            padding: 0.3rem 1.8rem;
            background: #00000010;
            backdrop-filter: blur(20px);
            border-radius: 100px;
            border: 1px solid var(--grey);
            transition: all 0.5s ease-in-out;

            @media screen and (max-width: 768px) {
              padding: 0.3rem 1.3rem;
            }

            &:hover {
              border: 1px solid var(--text-gradient-stroke);
            }

            span {
              color: transparent;
              background: var(--text-gradient);
              background-clip: text;
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              -webkit-text-stroke: 0.5px var(--text-gradient-stroke);
            }
          }
        }
      }
    }

    p {
      font-family: var(--light-font);
      width: 70%;
      font-weight: 300;
      color: var(--whites);

      @media screen and (max-width: 1024px) {
        width: 90%;
      }

      @media screen and (max-width: 768px) {
        width: 100%;
      }
    }
  }
`;

const fadeVariants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeInOut",
      delay: 0.1,
    },
  },
};

const staggerChildrenVariants = {
  animate: {
    transition: {
      staggerChildren: 0.5,
    },
  },
};

function FirstSection() {
  let videoSource =
    "https://res.cloudinary.com/divbobkmd/video/upload/v1695487376/Cyper%20studio/cube-loop-comp_em4pjt.mp4";
  if (isAndroid) {
    videoSource =
      "https://res.cloudinary.com/divbobkmd/video/upload/v1695302345/cube-loop_pwawki.webm";
  } else if (isIOS || isWindows) {
    videoSource =
      "https://res.cloudinary.com/divbobkmd/video/upload/v1695487376/Cyper%20studio/cube-loop-comp_em4pjt.mp4";
  }

  return (
    <div>
      <FirstSectioncontainer
        variants={staggerChildrenVariants}
        initial="initial"
        animate="animate"
      >
        <motion.div variants={fadeVariants} className="bgvideo">
          <video autoPlay loop muted playsInline>
            <source src={videoSource} type="video/mp4" />
          </video>
        </motion.div>
        <div className="container">
          <motion.h1 variants={fadeVariants}>
            We are <br />{" "}
            <div className="studio">
              <Link href="/about">
                <div className="span link">
                  <span>Cyper</span>
                </div>
              </Link>
              Studio
            </div>
          </motion.h1>
          <motion.p variants={fadeVariants}>
            Our commitment lies in nurturing the growth of your online business.
            Armed with our vast expertise in software development, branding, and
            social media marketing, we are well-prepared to guide you on the
            path to realizing your aspirations and achieving success.
          </motion.p>
          <motion.div variants={fadeVariants}>
            <Button
              borderRadius="5px"
              mfontsisze=".9rem"
              fontsize="1rem"
              paddingx="1.4rem"
              paddingy=".7rem"
              mpaddingx="1.4rem"
              mpaddingy=".7rem"
              text="Let's Talk"
            />
          </motion.div>
        </div>
      </FirstSectioncontainer>
    </div>
  );
}

export default FirstSection;
