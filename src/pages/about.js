import React from "react"
import { Link } from "gatsby"
import Layout from "../componants/Layout"

const AboutPage = () => {
  return (
    <Layout>
      <div>
        <h1> This Is About Page</h1>
        <p> This Is About Page Wishay ahe ka</p>
        <p>
          <Link to="/contact">Contact </Link> Me
        </p>
      </div>
    </Layout>
  )
}
export default AboutPage
