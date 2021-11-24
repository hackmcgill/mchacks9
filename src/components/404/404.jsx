import React from "react"

import Container from "./Container"
import Wrapper from "./Wrapper"
import Image from "./Image"
import Text from "./Text"
import Button from "./Button"

import NotFoundImg from "../../assets/images/designs/not-found.svg"

const home = () => {
  window.location = "/"
}

const NotFound = () => {
  if (typeof window !== 'undefined')
    window.location = '/'
}

export default NotFound
