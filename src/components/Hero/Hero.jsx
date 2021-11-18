import React from "react"

import HeroStyles from "./HeroStyles"
import { ArrowStyles } from "./FloatingStyles"

import Buildings from "./Buildings"
import Button from "./Button"
import SignUpForm from "./SignUpForm"

import MountainsImg from "../../assets/images/designs/mountains.svg"
import McHacksImg from "../../assets/images/designs/mchacks9-hero-logo.png"
import ArrowImg from "../../assets/images/designs/arrow.svg"

const Livesite = () => {
  window.location = "https://mchacks.ca/live"
}

// const Live = () => {
//   window.location = "/live"
// }

const Hero = () => (
  <>
    <HeroStyles>
      <div className="hero__container">
        <img
          className="hero__heading-image"
          src={McHacksImg}
          alt="McHacks"
        />
        <h1 className="hero__heading">
          McHacks
        </h1>
        <h2 className="hero__topsubheading">McGill University · Jan 29-31, 2022</h2>
        <div className="hero-header">
          {/*  */}
          {/* <ArrowStyles src={ArrowImg} />
          <ArrowStyles src={ArrowImg} style={{ left: 25 }} /> */}
        </div>
        <p className="hero__subheading">Sign up for updates on McHacks. No spam, we promise.</p>
        <div className="hero__email">
          <SignUpForm/>
        </div>
      </div>
      <img
        className="hero__bottom-border-img"
        src={MountainsImg}
        alt="Background"
      />
    </HeroStyles>
  </>
)

export default Hero
