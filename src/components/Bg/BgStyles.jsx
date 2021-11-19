import styled from "styled-components"
import * as styleVars from "../variable"

export const BgStyles = styled.section`
  background: linear-gradient(
    ${styleVars.backgroundGradientStart},
    ${styleVars.backgroundGradientEnd}
  );
`

export default BgStyles
