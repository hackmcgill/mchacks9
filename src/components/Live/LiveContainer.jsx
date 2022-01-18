import styled from "styled-components"
import * as styleVars from "../variable"
import Container from "../FAQ/Container"

const LiveContainer = styled(Container)`
  height: auto;
  text-align: center;
  background: none;
  margin: auto;
  margin-top: 12rem;
  margin-bottom: 12rem;
  max-width: 50%;
  padding: 26px;

  h2 {
    color: ${styleVars.darkSecondaryBlue};
    font-size: 3rem;
    font-weight: 400;
  }

  .QuestionBox {
    width: 100%;
    padding: 12px 24px;
    text-align: left;
    font-size: 1.1em;
    cursor: pointer;
    margin: 20px;
    box-sizing: border-box;
  }
`

export default LiveContainer
