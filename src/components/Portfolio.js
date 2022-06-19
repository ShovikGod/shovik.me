import React from "react"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"

import { Container } from "./common"

import { projects } from "../data"

import "./portfolio.css"
// import PortfolioAction from "./PortfolioAction"

const Portfolio = () => {
  return (
    <div id="portfolio" className="portfolio-area">
      <Container>
        <div className="title left" style={{ height: "160px" }}>
          <p>Projects</p>
        </div>
        <div className="portfolios">
          <div className="portfolio-items portfolios-featured">
            {projects.map(({ name, image, description, demo, source, tools }) => (
              <div key={name} className="portfolio">
                <div className="portfolio-img">
                  <img alt={name} src={image} />
                </div>
                <div className="details">
                  <h4>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={demo}
                    >
                      {name}
                    </a>
                  </h4>
                  <p>{description}</p>
                  <div className="links">
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
                  </div>
                  <ul className="portfolio-tools">
                    {tools.map(tool => (
                      <li key={tool}>{tool}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          {/* <div className="portfolio-items portfolios-featured">
            {selectedFeaturedPortfolios.map((portfolio, index) => (
              <div key={index} className="portfolio">
                <div className="portfolio-img">
                  <img alt={portfolio.name} src={portfolio.image} />
                </div>
                <div className="details">
                  <h4>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={portfolio.demo}
                    >
                      {portfolio.name}
                    </a>
                  </h4>
                  <p>{portfolio.description}</p>
                  <div className="links">
                    <ul>
                      {portfolio.source && (
                        <li>
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={portfolio.source}
                          >
                            <FaGithub />
                          </a>
                        </li>
                      )}
                      {portfolio.demo && (
                        <li>
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={portfolio.demo}
                          >
                            <FaExternalLinkAlt />
                          </a>
                        </li>
                      )}
                    </ul>
                  </div>
                  <ul className="portfolio-tools">
                    {portfolio.tools.map(tool => (
                      <li key={tool}>{tool}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className="portfolio-items portfolios-regular">
            {selectedPortfolios.map((portfolio, index) => (
              <div key={index} className="portfolio small">
                <div className="details">
                  <h4>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={portfolio.demo}
                    >
                      {portfolio.name}
                    </a>
                  </h4>
                  <p>{portfolio.description}</p>
                  <div className="links">
                    <ul>
                      {portfolio.source && (
                        <li>
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={portfolio.source}
                          >
                            <FaGithub />
                          </a>
                        </li>
                      )}
                      {portfolio.demo && (
                        <li>
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={portfolio.demo}
                          >
                            <FaExternalLinkAlt />
                          </a>
                        </li>
                      )}
                    </ul>
                  </div>
                  <ul className="portfolio-tools">
                    {portfolio.tools.map(tool => (
                      <li key={tool}>{tool}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div> */}
          {/* <PortfolioAction /> */}
        </div>
      </Container>
    </div>
  )
}

export { Portfolio }
