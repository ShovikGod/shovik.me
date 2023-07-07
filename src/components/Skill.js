import React, { useState } from "react"

import { Container, Title } from "./common"

import { skills } from "../data"

import "./skill.css"

import Zoom from 'react-reveal/Zoom'
import Bounce from 'react-reveal/Bounce'

const Skill = () => {
  const skillsName = Object.keys(skills)
  const [selectedSkill, setSelectedSkill] = useState(skillsName[0])
  const selectedSkills = skills[selectedSkill]
  return (
    <div id="skill" className="skill-area">
      <Container>
        <Title title="Skills" />
        <div className="skills">
          <Zoom cascade left bottom duration={500}>
            <ul className="skill-nav">
              {skillsName.map(name => (
                <li
                  onClick={() => setSelectedSkill(name)}
                  className={name === selectedSkill ? "active" : ""}
                  key={name}
                >
                  {name}
                </li>
              ))}
            </ul>
          </Zoom>

          <Bounce cascade duration={500}>
            <div className="skill">
              {selectedSkills.map(({ name, percent }) => (
                <div key={name} className="card">
                  <h4>{name}</h4>
                  <p>{percent}%</p>
                  <div style={{ width: percent + "%" }} className="progress-ar" />
                </div>
              ))}
            </div>
          </Bounce>
        </div>
      </Container>
    </div>
  )
}

export { Skill }
