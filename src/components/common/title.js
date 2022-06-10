import React from "react"
import {
  FaGithub,
  FaFacebookF,
  FaLinkedinIn,
  FaMediumM,
  FaTwitter,
} from "react-icons/fa"

import "./title.css"

export const Title = ({ title, social, side, height }) => {
  return (
    <div
      style={{ height }}
      className={`title ${side} ${social ? "social" : ""}`}
    >
      {social && (
        <ul>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/ShovikGod"
            >
              <FaGithub />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/metals.life/"
            >
              <FaFacebookF />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/shovik-poddar-65a380191/"
            >
              <FaLinkedinIn />
            </a>
          </li>
        </ul>
      )}
      <p>{title}</p>
    </div>
  )
}

Title.defaultProps = {
  side: "left",
  height: "160px",
}
