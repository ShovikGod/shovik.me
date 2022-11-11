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
      <SEO title="Shovik Poddar" />
      <Intro />
      <About />
      <Skill />
      <Portfolio />
      <Contact />
    </Layout>
  </>
)

export default IndexPage
