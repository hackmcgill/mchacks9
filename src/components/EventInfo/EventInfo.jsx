import React from "react"

import EventInfoStyles from "./EventInfoStyles"
import Event49Img from "../../assets/images/event/McHacks-49.jpg"
import Container from "./Container"
import Image from "./Image"
import Text from "./Text"

const EventInfo = () => {
    return (
        <Container>
            <EventInfoStyles>
                <Image src={Event49Img}
                    width={720}
                    height={480}
                    alt="McHacks Event Picture" />
                <Text>
                    <h2>In-Person or Virtual</h2>
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
            </EventInfoStyles>
        </Container>
    )
}

export default EventInfo;