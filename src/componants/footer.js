import React from "react"
import {graphql,useStaticQuery} from 'gatsby'

const Footer= () => {
  const data = useStaticQuery ( graphql`
  query{
    site {
      siteMetadata {
        footer
      }
    }
  }
 `)
  return (
    <footer style={{backgroundColor:'#f3f3f3'}}>
      <h4>{data.site.siteMetadata.footer} </h4>
      <p>contact details : 94949494902</p>
    </footer>
  )
}
export default Footer
