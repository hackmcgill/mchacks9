import React from "react"

import BgStyles from "./BgStyles"
import BoxGradientStyles from "./BoxGradientStyles"

import BoxGradientImg from "../../assets/images/designs/sponsor-gradient.svg"

const Bg = ({ children }) => (
  <BgStyles>
    {children}
    <BoxGradientStyles src={BoxGradientImg} />
  </BgStyles>
)

export default Bg
