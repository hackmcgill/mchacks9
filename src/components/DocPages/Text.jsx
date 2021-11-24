import styled from "styled-components"
import * as styleVars from "../variable"

export const Text = styled.div`
  margin-bottom: 1rem;
  padding: 26px;
  color: ${styleVars.hackWhite};

  h1 {
    padding-top: 5rem;
    color: ${styleVars.textColor};
    font-size: 5rem;
    font-weight: 400;
  }

  h2 {
    color: ${styleVars.textColor};
    font-size: 3rem;
    font-weight: 400;
    margin-bottom: 0.22rem;
  }
  
  a {
    //f0f3bd, ebebeb, c8bfc7, E9B872, f8c537, 92dce5, FFD275
    color: #f0f3bd;
  }

  b {
    //f0f3bd, ebebeb, c8bfc7, E9B872, f8c537, 92dce5, FFD275
    color: #f0f3bd;
  }

  @media only screen and (max-width: ${styleVars.smUp}) {
    width: 100%;
    margin: 0;
    padding: 36px;
  }
`

export default Text
