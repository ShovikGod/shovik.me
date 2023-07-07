import React from "react"

import { Container, Title } from "./common"

import { experiences } from "../data"

import "./experience.css"

import Zoom from 'react-reveal/Zoom'
import Fade from 'react-reveal/Fade'

const Experience = () => {
  return (
    <div id="experience" className="experience-area">
      <Container>
        <Title side="right" title="Experiences" />
        
        <div className="experiences">
          <Zoom cascade right bottom duration={800}>
            <div className="experience-items">
              {experiences.map(({ company, link, image, role, sDate, eDate, desc, skills }) => (
                <div key={company} className="experience">
                  <Fade bottom cascade duration={1000}>
                    <div className="header">
                        <div className="experience-img">
                          <img alt={company} src={image} /> 
                        </div>
                        
                        <h4>
                          <a href={link} target="_blank">
                            {company}  
                          </a>
                        </h4>
                      
                        <p>{role}</p>
                    </div>

                    <hr className="horizontal-rule"></hr>

                    <div className="details">                  
                      <ul>
                        {desc.split("\n").map((i, key) => {
                            return <li key={key}>{i}</li>;
                        })}
                      </ul>
                    </div>
                    
                    <hr className="horizontal-rule bottom"></hr>

                    <div className="footer">                        
                        <p className="skills">
                          {skills}  
                        </p>
                      
                        <p>{sDate} - {eDate}</p>
                    </div>
                  </Fade>
                </div>
              ))}
            </div>
          </Zoom>
        </div>
      </Container>
    </div>
  )
}

export { Experience }
