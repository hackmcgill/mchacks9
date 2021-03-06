import React, { useEffect, useState } from "react"

import { slide as Menu } from "react-burger-menu"
import { Link } from "gatsby"

import Container from "./Container"
import IconContainer from "./IconContainer"
import Icon from "./Icon"
import Links from "./Links"
import NavLink from "./NavLink"
import MobileMenu from "./MobileMenu"

import Logo from "../../assets/images/logos/mchacks-martlet.svg"
import SocialMediaBar from "../SocialMedia/SocialMediaBar"

import MLHBanner from "../../assets/images/mlh-trust-badge-2022-white.svg"

const Nav = ({
  scrollToAbout = () => {},
  scrollToSponsor = () => {},
  scrollToFaq = () => {},
  darkBackground = false,
}) => {
  const [hasBorder, setHasBorder] = useState(false)
  const handleScroll = () => {
    setHasBorder(window.pageYOffset > 15)
  }

  useEffect(() => {
    handleScroll()
    document.addEventListener("scroll", handleScroll)
    return () => document.removeEventListener("scroll", handleScroll)
  }, [])

  const NavItems = (mobile) => (
    <>
      <NavLink onClick={scrollToAbout} mobile={mobile}>About</NavLink>
      <NavLink onClick={scrollToSponsor} mobile={mobile}>Sponsor</NavLink>
      <NavLink onClick={scrollToFaq} mobile={mobile}>FAQ</NavLink>
      <NavLink href="https://app.mchacks.ca" mobile={mobile}>Apply</NavLink>
    </>
  )
  return (
    <Container className={(hasBorder ? "has-border " : "") + (darkBackground ? "dark-background" : "")}>
      <div>
        <IconContainer>
          <Link to="/">
            <Icon src={Logo} />
          </Link>
        </IconContainer>
        <Links hasBorder={hasBorder}>
          {NavItems(false)}
          <div class="Nav__socials">
            <SocialMediaBar />
          </div>
          <div class="Nav__mlh-banner">
            <img src={MLHBanner} alt="mlh-banner" />
          </div>
        </Links>
      </div>
      <Menu isOpen={true} styles={MobileMenu}>
        {NavItems(true)}
      </Menu>
    </Container>
  )
}

export default Nav
