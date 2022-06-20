import React from "react"

import "./button.css"

const Button = ({
  title,
  link,
  target,
  clickEvent,
  onMouseOver,
  onMouseOut,
  mt,
  mb,
  ml,
  mr,
  type,
}) => {
  const handleClick = e => {
    e.preventDefault()
    const hash = e.target.hash
    const el = document.querySelector(hash)
    const offsetTop = el.offsetTop
    window.scrollTo({
      top: offsetTop,
      left: 0,
      behavior: "smooth",
    })
  }
  return (
    <a
      style={{
        marginTop: mt,
        marginBottom: mb,
        marginLeft: ml,
        marginRight: mr,
      }}
      target={target}
      onClick={clickEvent && handleClick}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      rel={target ? "noopener noreferrer" : ""}
      className= {`btn ${(type=="outlined") ? "btn-outlined" : ""}`}
      href={link}
    >
      {title}
    </a>
  )
}

Button.defaultProps = {
  title: "Button",
  link: "https://shovik.me",
  target: "",
  marginTop: 0,
  marginBottom: 0,
  marginLeft: 0,
  marginRight: 0,
  type: "solid",
}

export { Button }
