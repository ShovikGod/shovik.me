import React from "react"

import { Container, Title, Button } from "./common"

import "./contact.css"

const Contact = () => {
  return (
    <div id="contact" className="contact-area">
      <Container>
        <Title side="right" title="Contact" />
        <div className="contact">
          <div className="contact-status">
            <p>
              I am interested in working with any company that thinks my skill will be helpful for them. If you are looking for someone like me, please let me know. Or you can just 'say hi' to me.
            </p>
            <div>
              <Button
                title="Contact Me"
                mt="25px"
                bgColor="#f27602"
                color="#fff"
                link="mailto:ws.shovik@gmail.com"
              />
            </div>
          </div>
          <div className="contact-details">
            <ul>
              <li>
                <h5>Email</h5>
                <p>
                <a href="mailto:ws.shovik@gmail.com">ws.shovik@gmail.com</a>
                </p>
              </li>
              <li>
                <h5>Socials</h5>
                <p>
                  LinkedIn - <a href="https://www.linkedin.com/in/shovik-poddar-65a380191/" target="_blank" rel="noreferrer">@shovik-poddar</a>
                <br/>
                  Facebook - <a href="https://www.facebook.com/metals.life/" target="_blank" rel="noreferrer">@metals.life</a>
                </p>
              </li>
              <li>
                <h5>Address</h5>
                <p>397/1, Subhas Nagar, Dum Dum Cantt.,<br/>Kolkata - 700065, West Bengal, India</p>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  )
}

export { Contact }
