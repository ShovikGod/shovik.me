import React from "react"

import { Container, Title, Button } from "./common"

import "./intro.css"

import Bounce from 'react-reveal/Bounce'
import Fade from 'react-reveal/Fade'
import Zoom from 'react-reveal/Zoom'

const Intro = () => {
  return (
    <div className="intro-area">
      <Title title="Follow Me" social height="320px" />
      
      <Container>
        <div className="intro">
          <div className="intro-text">
            <Fade top><p>Hello! I am</p></Fade>
            
            <Fade duration={2500} delay={300}>
              <div>
                <h1 className="name">Shovik Poddar</h1>
              </div>
            </Fade>
            
            <Fade top delay={300}>
              <h3>Full Stack Developer</h3>
            </Fade>
            
            <Zoom cascade delay={500} duration={500}>
              <ul>
                <li>Web Developer</li>
                <li>Programmer</li>
                {/* <li>Graphic Designer</li> */}
              </ul>
            </Zoom>
            
            <div className="action">
              <Bounce delay={500}>
                <Button
                  link="https://github.com/ShovikGod/shovik.me/raw/main/src/data/file/MyResume.pdf"
                  target="__blank"
                  title="Get Resume"
                />                  
              </Bounce>
            
              <Bounce delay={700}>
                <Button 
                  type="outlined"
                  clickEvent
                  link="#about"
                  ml="15px"
                  title="About Me"
                />
              </Bounce>
            </div>
          </div>
        </div>
      </Container>      
    </div>
  )
}

export { Intro }
