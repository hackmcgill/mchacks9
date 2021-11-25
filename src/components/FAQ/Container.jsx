import styled from "styled-components"
import * as styleVars from "../variable"

import bgImage from "./pattern.svg"

export const Container = styled.div`

  // max-width: 720px;
  // height: calc(1340/720 * 100vw);
  height: 1340px;
  max-height: 1340px;
  text-align: center;
/*   margin: auto;
  margin-bottom: 100px;
  margin-top: 100px; */
  background-image: url(${bgImage}), linear-gradient(#FED9AF, #FFB260);
  // background-size: contain;
  // background-repeat: repeat;
  padding-top: 180px;
  // z-index: -2;
  position: relative;
  overflow-x: hidden;

  #top-gradient {
    position: absolute;
    top: 0;
    left: 0;
    vertical-align: top;
    // z-index: -1;
  }

  #bottom-gradient {
    position: absolute;
    bottom: 0;
    left: 180px;
  }

  &.hidden {
    display: none !important;
  }

  @media only screen and (max-width: ${styleVars.mdUp}) {
    padding-top: 90px;
    padding-bottom: 90px;
    // background-image: none;
    // background-color: red;
    height: auto;
    max-height: none;

    #top-gradient {
      // display: none;
    }
  }
`

export default Container
