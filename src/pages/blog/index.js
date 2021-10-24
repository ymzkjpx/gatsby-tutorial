import * as React from 'react'
import {Link, graphql } from 'gatsby'
import Layout from '../../components/layout'
import { MDXRenderer } from 'gatsby-plugin-mdx'

const BlogPage =({data})=>{
    return(
        <Layout pageTitle="My Blog Posts">
          {
            data.allMdx.nodes.map(node => (
              <article key={node.id}>
                <h2>
                  <Link to={`/blog/${node.slug}`}>
                    {node.frontmatter.title}
                  </Link>
                </h2>
                <p>{node.frontmatter.date}</p>
              </article>
            ))
          }
        </Layout>
    )
}

export const query = graphql`
query MyQuery {
  allMdx(sort: {fields: frontmatter___date, order: DESC}) {
    nodes {
      frontmatter {
        date(formatString: "YYYY-MM-DD")
        title
      }
      id
      slug
    }
  }
}


`

export default BlogPage