import React from "react"
import * as styleVars from "../variable"

import Event49Img from "../../assets/images/event/McHacks-49.jpg"
import Container from "./Container"
import Image from "./Image"
import Text from "./Text"
import Seperator from "./Seperator"

const EventInfo = () => {
  return (
    <div style={{backgroundColor: styleVars.darkSecondaryBlue}}>
      <Container>
        <Image src={Event49Img}
          width={840}
          height={560}
          alt="McHacks Event Picture"
        />
        <Text>
          <h3>In-Person or Virtual</h3>
          <Seperator />
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
        </Text>
      </Container>
    </div>
  )
}

export default EventInfo;