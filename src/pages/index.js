import * as React from 'react'
import {Link} from 'gatsby'

const IndexPage = () =>{
  return(
    <main>
      <title>Home IndexPage</title>
      <h1>Welcome My Page.</h1>
      <p>I'm cat.</p>
      <Link to="/about">About</Link>
    </main>
  )
}
export default IndexPage