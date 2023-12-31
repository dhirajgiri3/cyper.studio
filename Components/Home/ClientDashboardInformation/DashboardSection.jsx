import React from "react";
import styled from "styled-components";
import SplitReveal from "@/Components/Animations/TextAnimations/SplitReveal";
import Up from "./Components/Up/Up";
import { motion } from "framer-motion";

const DashboardSectionContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .container {
    padding: 2.5rem 10rem;
    height: 100%;
    width: 100%;

    @media screen and (max-width: 1024px) {
      padding: 2.5rem 3rem;
    }

    @media screen and (max-width: 767px) {
      padding: 0rem 1rem;
    }
  }

  .introvid {
    width: 80%;
    height: 70vh;
    object-fit: contain;
    margin: 0 auto;
    margin-bottom: 1rem;

    @media screen and (max-width: 1024px) {
      height: 40vh;
      width: 100%;
    }

    @media screen and (max-width: 767px) {
      height: 30vh;
      margin-bottom: 3rem;
    }
  }

  .about-sec {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: var(--light-font);
    font-size: var(--para);
    gap: 2rem;

    @media screen and (max-width: 767px) {
      flex-direction: column;
      justify-content: center;
    }

    .split {
      width: 65%;

      @media screen and (max-width: 767px) {
        width: 100%;
      }
    }

    .meme-video {
      width: 35%;

      @media screen and (max-width: 767px) {
        width: 100%;
      }
    }

    video {
      height: 15rem;
      width: 15rem;
      object-fit: cover;
      border-radius: 100rem;

      @media screen and (max-width: 767px) {
        border-radius: 0;
      }
    }
  }

  hr {
    margin: 3rem 0;
    border: 0.3px #ffffff solid;
    height: 0.5px;

    @media screen and (max-width: 1024px) {
      margin: 0;
      margin-top: 3rem;
    }

    @media screen and (max-width: 767px) {
      margin: 3rem 0;
    }
  }

  .dashboard {
    width: 100%;
    min-height: 90vh;
    height: 100%;
    position: relative;
    z-index: 0;

    @media screen and (max-width: 1024px) {
      min-height: 70vh;
    }

    @media screen and (max-width: 767px) {
      min-height: 90vh;
    }

    .bottom {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 2;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 7rem;
      mix-blend-mode: difference;

      @media screen and (max-width: 767px) {
        gap: 3rem;
      }

      .primary {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        text-align: center;
        gap: 3rem;

        @media screen and (max-width: 767px) {
          gap: 1.5rem;
        }

        p {
          font-size: var(--para);
          color: var(--white);
          font-weight: 500;
          font-family: var(--font);
        }

        h1 {
          font-size: var(--heading);
          color: var(--white);
          font-weight: 500;
          font-family: var(--heading-font);
          width: 90%;
          margin: 0 auto;

          @media screen and (max-width: 767px) {
            font-size: var(--heading-mid);
            width: 98%;
          }
        }
      }

      .secondary {
        width: 70%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        text-align: center;
        gap: 3rem;
        margin-top: 3rem;

        @media screen and (max-width: 1024px) {
          gap: 1.5rem;
          width: 80%;
        }

        @media screen and (max-width: 767px) {
          gap: 1.5rem;
          width: 98%;
        }

        p {
          font-size: var(--norm);
          color: var(--white);
          font-weight: 300;
          font-family: var(--light-font);
          width: 80%;
          margin: 0 auto;

          @media screen and (max-width: 767px) {
            width: 100%;
          }
        }
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

const DashboardSection = () => {
  return (
    <DashboardSectionContainer>
      <video autoPlay loop muted playsInline className="introvid">
        <source
          src="https://res.cloudinary.com/divbobkmd/video/upload/v1695486515/Cyper%20studio/intro-cyper-comp_m93u4z.mp4"
          type="video/mp4"
        />
      </video>
      <div className="container">
        <div className="about-sec">
          <div className="split">
            <SplitReveal
              width="100%"
              fontsize="1rem"
              lineheight="1.5"
              fontweight="300"
              letterSpace="0"
              tfont="1rem"
              mfont="1rem"
              text="Cyper Studio, an emerging agency, embodies dynamism and creativity, driven by a dedicated team eager to bring your vision to life. We are your partners in progress, committed to exceeding expectations and pushing boundaries in the digital landscape."
              dangerouslySetInnerHTML={true}
            />
          </div>
          <motion.div
            variants={fadeVariants}
            initial="initial"
            whileInView="animate"
            className="meme-video"
          >
            <video loop autoPlay muted playsInline>
              <source
                src="https://res.cloudinary.com/divbobkmd/video/upload/v1695425223/Cyper%20studio/yes-oh_mnadqn.mp4"
                type="video/mp4"
              />
            </video>
          </motion.div>
        </div>
        <hr />
        <div className="dashboard">
          <div className="bottom">
            <motion.div
              variants={fadeVariants}
              initial="initial"
              whileInView="animate"
              className="primary"
            >
              <p>Only for clients</p>
              <h1>
                We have developed a system that provides realtime updates on the
                progress of your current project.
              </h1>
            </motion.div>
            <motion.div
              variants={fadeVariants}
              initial="initial"
              whileInView="animate"
              className="secondary"
            >
              <p>Hey excited for this...?</p>
              <p>
                Once the agreement is formalized between our parties, you will
                be provided with a unique project ID. This project ID will grant
                you access to our dedicated client portal, allowing you to
                monitor the real-time progress of your project.
              </p>
            </motion.div>
          </div>
          <Up />
        </div>
      </div>
    </DashboardSectionContainer>
  );
};

export default DashboardSection;
