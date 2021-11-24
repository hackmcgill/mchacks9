import styled from "styled-components"
import * as styleVars from "../variable"

export const Container = styled.section`
  display: flex;
  max-width: 100%;
  align-items: center;
  background: linear-gradient(${styleVars.backgroundGradientStart}, ${styleVars.backgroundGradientEnd});
`

export default Container
