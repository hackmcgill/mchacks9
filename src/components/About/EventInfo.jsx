import React from "react"

import styled from "styled-components"
import Text from "./Text"
import * as styleVars from "../variable"

import Event49Img from "../../assets/images/event/McHacks-49.jpg"
import Event211Img from "../../assets/images/event/McHacks-211.jpg"

const EventInfoContainer = styled.div`
  .EventInfo__row {
    max-width: 1200px;
    margin: auto;
    display: flex;
    align-items: center;
    padding-bottom: 144px;

    .EventInfo__img {
      max-width: 840px;
      border-radius: 12px;
      box-shadow: 0 2px 12px 6px rgba(0, 0, 0, 0.15);
    }

    .EventInfo__text {
      font-size: 18px;
      padding-left: 30px;
      padding-right: 54px;

      &.right {
        padding-left: 54px;
        padding-right: 30px;
      }

      h2 {
        color: ${styleVars.hackWhite};
        font-size: 24px;
        font-weight: bold;
        margin-top: 16px;
        margin-bottom: 16px;
      }

      .seperator {
        width: 32px;
        height: 6px;
        background: ${styleVars.darkBlue};
        margin-bottom: 16px;
      }

      p {
        color: ${styleVars.textColor};
        margin: 0;
        margin-bottom: 16px;
      }
    }
  }
`

const EventInfo = ({}) => (
  <EventInfoContainer>
    <div className="EventInfo__row">
      <img
        src={Event49Img}
        width={840}
        height={560}
        className="EventInfo__img"
        alt="McHacks Event Picture"
      />
      <div className="EventInfo__text right">
        <h2>In-person or virtual</h2>
        <div className="seperator"/>
        <p>
          This year, McHacks is going global! For 36 hours, the best and brightest students from around the
          world will connect remotely and build their dreams.
        </p>
        <p>
          Near Montréal? We'll be choosing a select cohort of people to attend the event in-person and join us on McGill campus
          for 36 hours of hacking, food, and fun.
        </p>
        <p>
          Whichever way you choose to attend, you'll get the full McHacks experience of innovation, networking, &amp; workshops.
        </p>
      </div>
    </div>
    {/*<div className="EventInfo__row">
      <div className="EventInfo__text">
        <h2>A one-of-a-kind weekend</h2>
        <div className="seperator"/>
        <p>
          Join us this January 
        </p>
        <p>
          Near Montréal? We'll be choosing a select cohort of people to attend the event in-person and join us on McGill campus
          for 36 hours of hacking, food, and fun.
        </p>
        <p>
          Whichever way you choose to attend, you'll get the full McHacks experience of innovation, networking, &amp; workshops.
        </p>
      </div>
      <img
        src={Event211Img}
        width={840}
        height={560}
        className="EventInfo__img"
        alt="McHacks Event Picture"
      />
    </div>*/}
  </EventInfoContainer>
)

export default EventInfo
