import styled from "styled-components"
import * as styleVars from "../variable"

export const HeroStyles = styled.section`

  z-index: 1;
  background-color: ${styleVars.darkBlue};
  background:  linear-gradient(to bottom, ${styleVars.darkBlue}, ${styleVars.lightBlue});
  color: ${styleVars.hackHeroBottomBlue};

  text-align: center;

  .hero__container {
    padding: 128px 144px;
    padding-top: 192px;
  }

  .hero__heading {
    display: none; /* Leave in h1 for SEO */
  }

  .hero__heading-image {
    width: 520px;
    margin-bottom: -32px;
  }

  .hero__topsubheading {
    font-size: 24px;
    font-weight: 400;
    text-align: center;
    color: ${styleVars.hackWhite};
    margin-top: 0;
    margin-bottom: 32px;
  }

  .hero__subheading {
    font-size: 16px;
    font-weight: 400;
    text-align: center;
    color: ${styleVars.hackBlack10};
    margin-top: 1rem;
    margin-bottom: 0;
    font-family: "Brown", san-serif;
  }

  .hero__cta {
    font-size: 1.8rem;
    font-weight: 400;
    text-align: center;
  }

  .hero__email {
    margin-bottom: 32px;
    margin-top: 12px;
    font-family: "Brown", san-serif;
    font-size: 14px;

    display: flex;
    justify-content: center;
  }

  .hero__illustrations {
    position: center;
    heught: 100%;
    width: 1173px;
    z-index: -2;
  }

  .hero__bottom-border-img {
    text-align: center;
    width: 101%;
    z-index: -2;
    margin-bottom: -10px;
  }
 

  @media only screen and (min-width: 1078px) and (max-width: 1399px) {
    max-width: 1280px;
    padding: 100px 60px;
    margin-top: 40px;
    margin-bottom: 117px;

    .hero__cta {
      font-size: 1.4rem;
    }

    .hero__illustrations {
      width: 880px;
      top: 50px;
    }
  }

  @media only screen and (max-width: 1077px) {
    padding: 0 2rem;
    margin-top: 80px;
    margin-bottom: 43px;
    text-align: center;

    .hero__heading {
      font-size: 48px;
    }

    .hero__topsubheading {
      text-align: center;
      padding-bottom: 0;
      font-size: 20px;
      margin-bottom: -10px;
    }

    .hero__subheading {
      display: block;
      text-align: center;
      margin: auto;
      margin-top: 16px;
      font-size: 18px;
      border-top: 2px solid ${styleVars.colorPurpleLight};
      border-bottom: 2px solid ${styleVars.colorPurpleLight};
      padding: 8px 0;
      max-width: 440px;
    }

    .hero__cta {
      font-size: 14px;
      text-align: center;
    }

    .hero__email {
      text-align: center;
      margin-top: 36px;
    }

    .hero__illustrations {
      max-width: 100%;
      margin-top: 120px;

      position: static;
      top: 0;
      right: 0;
      left: 0;
    }
  }

  @media only screen and (max-width: 410px) {
    .hero__line {
      display: block;
    }
  }
`

export default HeroStyles
