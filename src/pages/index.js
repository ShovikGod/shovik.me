import React from "react"

import {
  Intro,
  Portfolio,
  About,
  Skill,
  Contact,
} from "../components"
import { Layout, SEO } from "../components/common"

const IndexPage = () => (
  <>
    <Layout>
      <SEO title="Shovik Poddar" description="This portfolio website was created using gatsby" />
      <Intro />
      <About />
      <Skill />
      <Portfolio />
      <Contact />
    </Layout>
  </>
)

export default IndexPage
