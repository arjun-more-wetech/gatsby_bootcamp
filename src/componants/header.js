import React from "react"
import {Link,graphql,useStaticQuery} from "gatsby"
//import  "./header.module.scss";
import headerStyle from './header.module.scss'
const Header = () => {
  const data = useStaticQuery(graphql`
  query{
    site {
      siteMetadata {
        title
      }
    }
  }
  
  `)
  return (
    <header style={{backgroundColor:'#f3f3f3',padding:1}} className={headerStyle.header} >
      <h2 ><Link className={headerStyle.title}  to="/">{data.site.siteMetadata.title}</Link></h2>
      <nav>
        <ul className={headerStyle.navList}>
          <li><Link className={headerStyle.navItem} activeClassName={headerStyle.activeNavItem} to="/">Home</Link> </li>
          <li><Link className={headerStyle.navItem} activeClassName={headerStyle.activeNavItem}  to="/contact">Contact</Link> </li>
          <li><Link className={headerStyle.navItem} activeClassName={headerStyle.activeNavItem} to="/blog">Blog</Link></li>
          <li><Link className={headerStyle.navItem} activeClassName={headerStyle.activeNavItem}  to="/about">About</Link></li>
        </ul> 
      </nav>
    </header>
  )
}
export default Header
