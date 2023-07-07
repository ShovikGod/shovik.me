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
                Hello! 👋 I am a passionate  <span className="focus">Software Developer</span> having keen interest in  <span className="focus">Computer Networking</span> and <span className="focus">VLSI</span>. I previously started my career as a Graphic Designer, moving on to Web Development using MERN stack. I specialize in <span className="focus">Network Test Automation</span> and have worked on <span className="focus">TSN</span> protocols (specially the PTP and gPTP stack over ethernet).
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
