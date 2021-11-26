import styled from "styled-components";

const Image = styled.img`
  max-width: 720;
  max-height: 480;
  border-radius: 12px;
  box-shadow: 0 2px 12px 6px rgba(0, 0, 0, 0.15);

  @media only screen and (max-width: 1345px) {
    width: 418px;
  }

  @media only screen and (max-width: 1118px) {
    display: none;
  }
`

export default Image;