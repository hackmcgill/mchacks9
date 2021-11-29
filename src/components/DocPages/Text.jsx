import styled from "styled-components"
import * as styleVars from "../variable"

export const Text = styled.div`
  margin-bottom: 1rem;
  padding: 26px;
  color: ${styleVars.buttonColorText};

  h1 {
    padding-top: 5rem;
    color: ${styleVars.darkBlue};
    font-size: 5rem;
    font-weight: 400;
  }

  h2 {
    color: ${styleVars.darkBlue};
    font-size: 3rem;
    font-weight: 400;
    margin-bottom: 0.22rem;
  }
  
  a {
    //f0f3bd, ebebeb, c8bfc7, E9B872, f8c537, 92dce5, FFD275
    color: ${styleVars.darkYellow};
  }

  b {
    //f0f3bd, ebebeb, c8bfc7, E9B872, f8c537, 92dce5, FFD275
    color: ${styleVars.darkYellow};
  }

  @media only screen and (max-width: ${styleVars.smUp}) {
    width: 100%;
    margin: 0;
    padding: 36px;
  }
`

export default Text
