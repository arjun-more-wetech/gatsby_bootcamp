import React from "react"
import Footer from "../componants/footer"
import Header from "../componants/Header"
import "../styles/index.scss"
import LayoutStyle from "./layout.module.scss"

const Layout = props => {
  return (
    <div className={LayoutStyle.container}>
      <div className={LayoutStyle.content}>
        <Header />
        {props.children}
      </div>
      <Footer />
    </div>
  )
}
export default Layout
