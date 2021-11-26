import styled from "styled-components";

const EventInfoStyles = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: auto;
  padding-bottom: 144px;

  @media only screen and (max-width: 1345px) {
    max-width: 1000px;
  }

  @media only screen and (max-width: 1118px) {
    flex-direction: column;
    justify-content: center;
    padding-left: 30px;
    padding-right: 30px;
    padding-top: 40px;
  }
`

export default EventInfoStyles;