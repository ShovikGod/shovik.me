import React from "react"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"

import { Container, Title } from "./common"

import { projects } from "../data"

import "./projects.css"

import Zoom from 'react-reveal/Zoom'
import Fade from 'react-reveal/Fade'

const Projects = () => {
  return (
    <div id="portfolio" className="portfolio-area">
      <Container>
        <Title side="left" title="Projects" />
        
        <div className="portfolios">
          <Zoom cascade right bottom duration={800}>
            <div className="portfolio-items">
              {projects.map(({ name, description, demo, source, tools }) => (
                <div key={name} className="portfolio">
                  <div className="details">
                    <h4>
                        {name}
                    </h4>

                    <p>
                      {description}
                    </p>
              
                    <div className="links">
                      <Zoom cascade duration={1000}>
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
                    
                    <Zoom cascade top duration={1000}>
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

export { Projects }
