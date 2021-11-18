import React from "react"

import HeroStyles from "./HeroStyles"
import { ArrowStyles } from "./FloatingStyles"

import Buildings from "./Buildings"
import Button from "./Button"
import SignUpForm from "./SignUpForm"

import BuildingImg from "../../assets/images/designs/buildings.svg"
import McHacksImg from "../../assets/images/designs/mchacks9-hero-logo.png"
import GridImg from "../../assets/images/designs/grid.svg"
import RoadImg from "../../assets/images/designs/road.svg"
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
    <img
      src={GridImg}
      style={{ width: "100%", marginBottom: "-9px" }}
      alt="Background"
    />
    </HeroStyles>
  </>
)

export default Hero
