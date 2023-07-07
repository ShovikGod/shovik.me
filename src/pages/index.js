import React from "react"

import {
  Intro,
  About,
  Skill,
  Contact,
  Projects,
  Experience,
} from "../components"
import { Layout, SEO } from "../components/common"

const IndexPage = () => (
  <>
    <Layout>
      <SEO title="Shovik Poddar" description="This portfolio website was created using gatsby" />
      <Intro />
      <About />
      <Skill />
      <Experience />
      <Projects />
      <Contact />
    </Layout>
  </>
)

export default IndexPage
