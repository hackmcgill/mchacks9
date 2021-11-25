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
        <h2>Canada’s original collegiate hackathon goes global!</h2>
        <p>
          Each year McHacks is proud to welcome a diverse group of students from
          across North America to Montreal for a jam-packed weekend of hacking.
          This year, McHacks is going global! For 36 hours, the best and
          brightest students from around the world will connect remotely and
          build their dreams.
        </p>
        <p>
          Whether you're writing your first line of code, playing around with
          APIs, or building the next blockchain, McHacks is the place for you.
          We offer workshops, mentorship, and APIs to get you started, and we’re
          working hard to make sure everything you need for your next big hack
          is accessible from home. We hope you’ll join us remotely this winter
          for an exciting eighth edition of Canada’s favorite hackathon!
        </p>
      </Text>
      <Image src={AboutImg} />
    </Content>
  </Container>
)

export default About
