import { Link } from "gatsby"
import React from "react"

const Layout = ({pageTile, children}) =>{
    return(
        <div>
            <title>{pageTile}</title>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </nav>
            <main>
                <h1>{pageTile}</h1>
                {children}
            </main>
        </div>
    )
}

export default Layout