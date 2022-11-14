import React from "react"

import { Container, Title, Button } from "./common"

import profile from "../assets/image/profile.png"

import "./about.css"

import Bounce from 'react-reveal/Bounce'
import Fade from 'react-reveal/Fade'

const About = () => {
  return (
    <div id="about" className="about-area">
      <Container>
        <Title side="right" title="About Me" />
        
        <div className="about">
          <div className="about-details">
            <Fade duration={3000}>
              <p>
                Hello! I'm Shovik Poddar, a passionate <span className="focus">software developer</span>. I mainly develop <span className="focus">web applications</span>. My core skill is based on JavaScript and I love to do most of the things using JavaScript. My first preference has always been <span className="focus">designing UI</span> and <span className="focus">frontend devlopment</span>. I am currently in my 3rd year of undergraduate studies in Electronics & Communication Engineering.
              </p>
            </Fade>
            
            <div className="about-action">
              <Bounce delay={500}>
                <Button
                  link="mailto:ws.shovik@gmail.com"
                  title="Hire Me"
                />
              </Bounce>
            </div>
            
          </div>
          <div className="about-image">
            <div className="image">
              <Fade duration={2000}>
                <img alt="profile" src={profile} />
              </Fade>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export { About }
