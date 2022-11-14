import React from "react"

import { Container, Title, Button } from "./common"

import "./contact.css"

import Fade from 'react-reveal/Fade'
import Zoom from 'react-reveal/Zoom'
import Bounce from 'react-reveal/Bounce'

const Contact = () => {
  return (
    <div id="contact" className="contact-area">
      <Container>
        <Title side="left" title="Contact" />
        <div className="contact">
          <div className="contact-status">
            <Fade duration={2000}>
              <div>
                <p>
                  I am interested in working with any company that thinks my skill will be helpful for them. If you are looking for someone like me, please let me know. Or you can just 'say hi' to me.
                </p>
              </div>
            </Fade>
            
            <div id="contactBtn" style={{'display': 'flex'}}>
              <Bounce>
                <Button
                  title="Contact Me"
                  mt="25px"
                  link="mailto:ws.shovik@gmail.com"
                />
              </Bounce>
            </div>
            
          </div>
          <div className="contact-details">
            <ul>
              <li>
                <div style={{'display':'flex'}}>
                  <Zoom duration={200}>
                    <h5>Email</h5>  
                  </Zoom>
                </div>

                <div style={{'display':'flex', 'textAlign': 'justify'}}>
                  <Bounce>
                    <p>
                      <a href="mailto:ws.shovik@gmail.com">ws.shovik@gmail.com</a>
                    </p>
                  </Bounce>
                </div>
              </li>
              
              <li>
                <div style={{'display':'flex'}}>
                  <Zoom duration={200} delay={300}>
                    <h5>Socials</h5>  
                  </Zoom>
                </div>

                <div style={{'display':'flex', 'textAlign': 'justify'}}>
                  <Bounce delay={300}>
                    <p>
                      LinkedIn - <a href="https://www.linkedin.com/in/shovik-poddar-65a380191/" target="_blank" rel="noreferrer">@shovik-poddar</a>
                    <br/>
                      Facebook - <a href="https://www.facebook.com/metals.life/" target="_blank" rel="noreferrer">@metals.life</a>
                    </p>
                  </Bounce>
                </div>
              </li>
              
              <li>
                <div style={{'display':'flex'}}>
                  <Zoom duration={200} delay={600}>
                    <h5>Address</h5>  
                  </Zoom>
                </div>

                <div style={{'display':'flex', 'textAlign': 'justify'}}>
                  <Bounce delay={600}>
                    <p>397/1, Subhas Nagar, Dum Dum Cantonment,<br/>Kolkata - 700065, West Bengal, India</p>
                  </Bounce>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  )
}

export { Contact }
