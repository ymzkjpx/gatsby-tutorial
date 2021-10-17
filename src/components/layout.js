import { Link, graphql, useStaticQuery } from "gatsby"
import React from "react"
import Header from "./header"
import {
    container,
    contentTitle,
    navLinks,
    navLinkItem,
    navLinkText
} from './layout.module.css'

const Layout = ({pageTitle, children}) =>{
    const data = useStaticQuery(graphql`
    query{
        site {
          siteMetadata {
            title
          }
        }
      }
    `)
    return(
        <div className={container}>
            <Header/>
            <title>{pageTitle} | {data.site.siteMetadata.title}</title>
            <nav>
                <ul className={navLinks}>
                    <li className={navLinkItem}><Link to="/" className={navLinkText}>Home</Link></li>
                    <li className={navLinkItem}><Link to="/about" className={navLinkText}>About</Link></li>
                    <li className={navLinkItem}><Link to="/blog" className={navLinkText}>Blog</Link></li>
                </ul>
            </nav>
            <main>
                <h1 className={contentTitle}>{pageTitle}</h1>
                {children}
            </main>
        </div>
    )
}

export default Layout