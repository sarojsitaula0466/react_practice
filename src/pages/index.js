import React from 'react'

import Layout from '../components/layout'

import SEO from '../components/seo'
import HomePage from '../pages/homePage/homePage'
import ServicePage from '../pages/servicePage/services'

const IndexPage = () => (
  // <Layout>
  //   <SEO title="Home" />
  //   <h1>Hi people</h1>
  //   <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>

  //   </div>

  // </Layout>
  <div>
    <HomePage />
    <br />
    <br />
        <ServicePage />
  </div>
)

export default IndexPage
