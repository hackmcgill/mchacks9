import React from "react"

import HeroStyles from "./HeroStyles"
import { ArrowStyles } from "./FloatingStyles"

import Buildings from "./Buildings"
import mchacks9Logo from "./mchacks9Logo"
import Button from "./Button"
// import SignUpForm from "./SignUpForm"

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
    {/* <img
      src={McHacksImg}
      style={{ width: "100%", marginBottom: "-9px" }}
      alt="Background"
    /> */}
    <HeroStyles>
    <img
      src={McHacksImg}
      style={{ width: "70%", marginBottom: "-9px" }}
      alt="Background"
    />
      <h2 class="hero__topsubheading">McGill University · Jan 29-31, 2022</h2>
      <div class="hero-header">
        {/* <h1 class="hero__heading" style={{ display: "center" }}>
          McHacks
        </h1> */}
        {/* <ArrowStyles src={ArrowImg} />
        <ArrowStyles src={ArrowImg} style={{ left: 25 }} /> */}
      </div>
      <div class="hero__illustrations">
        <mchacks9Logo src={McHacksImg} />
      </div>
      <p class="hero__subheading">Sign up for updates on McHacks. No spam, we promise</p>

   
      {/* <div class="hero__illustrations">
        <mchacks9Logo src={McHacksImg} />
      </div> */}
    {/* </HeroStyles> */}
    {/* <img src="../../assets/images/designs/mchacks9-hero-logo.png" alt="mchacks9 logo" /> */}
    <img
      src={GridImg}
      style={{ width: "100%", marginBottom: "-9px" }}
      alt="Background"
    />
    </HeroStyles>
  </>
)

export default Hero
