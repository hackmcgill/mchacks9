import React from "react"

import BgStyles from "./BgStyles"
import BoxGradientStyles from "./BoxGradientStyles"

const Bg = ({ children }) => (
  <BgStyles>
    {children}
    <BoxGradientStyles />
  </BgStyles>
)

export default Bg
