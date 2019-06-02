import React from "react"
import Layout from "../componants/Layout"
import { graphql, useStaticQuery } from "gatsby"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
          }
        }
      }
    }
  `)

  console.log(data)

  return (
    <Layout>
      <div>
        <h1>Blog</h1>
        <ol>
          {data.allMarkdownRemark.edges.map(edge => {
            return (
              <li>
                <h5>{edge.node.frontmatter.title}</h5>
                <h5>{edge.node.frontmatter.date}</h5>
              </li>
            )
          })}
        </ol>
      </div>
    </Layout>
  )
}
export default BlogPage
