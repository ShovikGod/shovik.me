import React from "react"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"

import { Container, Title } from "./common"

import { projects } from "../data"

import "./portfolio.css"

import Zoom from 'react-reveal/Zoom'
import Fade from 'react-reveal/Fade'

const Portfolio = () => {
  return (
    <div id="portfolio" className="portfolio-area">
      <Container>
        <Title side="right" title="Projects" />
        
        <div className="portfolios">
          <Zoom cascade right bottom duration={800}>
            <div className="portfolio-items">
              {projects.map(({ name, image, description, demo, source, tools }) => (
                <div key={name} className="portfolio">
                  {/* <div className="portfolio-img">
                    <img alt={name} src={image} /> 
                  </div> */}

                  <div className="details">
                    <Fade bottom cascade duration={400} delay={700}>
                      <h4>
                          {name}
                      </h4>
                    </Fade>
                    
                    <Fade cascade duration={1000} delay={900}>
                      <p>
                        {description}
                      </p>
                    </Fade>
                    
                    <div className="links">
                      <Zoom cascade duration={500} delay={1000}>
                        <ul>
                          {source && (
                            <li>
                              <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href={source}
                              >
                                <FaGithub />
                              </a>
                            </li>
                          )}
                          
                          {demo && (
                            <li>
                              <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href={demo}
                              >
                                <FaExternalLinkAlt />
                              </a>
                            </li>
                          )}
                        </ul>
                      </Zoom>
                    </div>
                    
                    <Zoom cascade top duration={500} delay={500}>
                      <ul className="portfolio-tools">
                        {tools.map(tool => (
                          <li key={tool}>{tool}</li>
                        ))}
                      </ul>
                    </Zoom>
                  </div>
                </div>
              ))}
            </div>
          </Zoom>
        </div>
      </Container>
    </div>
  )
}

export { Portfolio }
