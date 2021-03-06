import React from "react"

import Container from "./Container"
import Text from "./Text"
import Image from "./Image"

import AboutImg from "../../assets/images/designs/about.svg"
import { Content } from "./Content"

const About = ({ scrollRef }) => (
  <Container ref={scrollRef} style={{}}>
    <Content>
      <Text>
        <h2>Dream. Develop. Deploy!</h2>
        <p>
          For 36 hours, over 500 of the boldest young minds across the globe
          come together for a jam-packed online weekend of beginner-to-pro workshops,
          networking, and epic hacking.
        </p>
        <p>
          Whether you're writing your first line of code, playing around with
          APIs, or building the next blockchain, McHacks is the place for you.
          We'll see you this January at the 9th annual rendition of Canada's original collegiate hackathon!
        </p>
        <p>
          Due to the ongoing COVID-19 pandemic, we are hosting our hackathon
          virtually to ensure the saftey of all our participants. 
        </p>
      </Text>
      <Image src={AboutImg} />
    </Content>
  </Container>
)

export default About
