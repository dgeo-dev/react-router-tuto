import React from "react"
import { useLocation } from "react-router-dom"

function About() {
  let location = useLocation()

  return (
    <>
      <h1>À propos</h1>
      <p>{location.state?.postTitle}</p>
    </>
  )
}

export default About
