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
          For 36 hours, over 500 of the boldest young minds across the Globe
          come together for a jam-packed weekend of beginner-to-pro workshops,
          decked-out hardware, delicious food, and some epic hacking.
        </p>
        <p>
          This year we're going bigger than ever! We're hosting our hackathon both
          online and in-person and you can choose which way you want to attend.
          So whether you're writing your first line of code, playing around with
          APIs, or building the next blockchain, McHacks is the place for you.
          We'll see you this January at year 9 of Canada's original collegiate hackathon!
        </p>
      </Text>
      <Image src={AboutImg} />
    </Content>
  </Container>
)

export default About
