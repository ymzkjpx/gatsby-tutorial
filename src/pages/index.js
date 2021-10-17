import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'
import { Children } from 'react'
import Layout from '../components/layout'

const IndexPage = () => {
  return (
    <Layout pageTitle="MyPage">
      <p>My home page.</p>
      <StaticImage
        alt="Clifford"
        src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large" 
        />
    </Layout>
  )
}
export default IndexPage