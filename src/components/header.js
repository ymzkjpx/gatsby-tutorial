import * as React from 'react'
import {graphql, useStaticQuery } from 'gatsby'
import {
    siteTitle
} from './header.module.css'

const Header = () =>{
    const data = useStaticQuery(graphql`
    query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `)
    return(
        <header>
            <h1 className={siteTitle}>{data.site.siteMetadata.title}</h1>
        </header>
    )
}

export default Header