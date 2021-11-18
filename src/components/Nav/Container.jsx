import styled from "styled-components"
import * as styleVars from "../variable"

export const Container = styled.nav`
  z-index: 2;
  height: 9rem;
  background-color: transparent;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 0.4s background-color ease-in, 0.4s box-shadow ease-in;

  &.has-border {
    background-color: ${styleVars.darkBlue};
    box-shadow: 0 2px 6px 3px ${styleVars.darkBlue}55;
  }
`

export default Container
