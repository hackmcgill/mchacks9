import React from "react"

import LiveContainer from "./LiveContainer"
import Question from "../FAQ/Question"
import QuestionGroup from "../FAQ/QuestionGroup"

const Resources = ({ visible }) => (
  <LiveContainer className={!visible ? "hidden" : ""}>
    <h2>Sponsor Resources</h2>
    <QuestionGroup>
    <Question question="OVHCloud">
    Create your first OVHcloud public cloud project! 
    Learn how to create your first Public Cloud project via the OVHcloud Control Panel.
      <br />
      Learn more {" "}
      <a
          href="https://docs.ovh.com/gb/en/public-cloud/create_a_public_cloud_project/"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>
        .
      <br/>
      Voucher Code: OVHcloud-McHacks
    </Question>

    <Question question="Balsamiq">
      Get a 90-day extended trial promo code when using Balsamiq Cloud!
      <br />
      Learn more about Balsamiq{" "}
      <a
        href="https://balsamiq.cloud/"
        target="_blank"
        rel="noopener noreferrer"
      >
        here
      </a>
      .
      <br/>
      To use their API, follow the steps{" "}
      <a
        href="https://balsamiq.com/wireframes/cloud/sales/promo/"
        target="_blank"
        rel="noopener noreferrer"
      >
        here
      </a>
      .
      <br/>
      Code: BQRSDEHW010522
    </Question>

    <Question question="Twilio">
      Facilitate your app’s communication functions and design system using the Twilio API as well as their design system.
      <br />
      Learn more {" "}
      <a
          href="https://www.twilio.com/blog/apply-promo-code"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>
        .
      <br/>
      Promo code: MCHACKS22
    </Question>
    </QuestionGroup>
  </LiveContainer>
)

export default Resources
