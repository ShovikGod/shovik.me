import React from "react"

import { Container, Title, Button } from "./common"

import profile from "../assets/image/profile.png"

import "./about.css"

const About = () => {
  return (
    <div id="about" className="about-area">
      <Container>
        <Title side="right" title="About Me" />
        <div className="about">
          <div className="about-details">
            <p>
              Hello! I'm Shovik Poddar, a passionate <span className="focus">software developer</span>. I mainly develop <span className="focus">web applications</span>. My core skill is based on JavaScript and I love to do most of the things using JavaScript. My first preference has always being <span className="focus">designing websites</span> and <span className="focus">frontend devlopment</span>. I am currently in my 3rd year of undergraduate studies in Electronics & Communication Engineering.
            </p>
            <div className="about-action">
              <Button
                link="mailto:ws.shovik@gmail.com"
                title="Hire Me"
              />
            </div>
          </div>
          <div className="about-image">
            <div className="image">
              <img alt="profile" src={profile} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export { About }
