import React from "react"
import Title from "./src/components/site_title"
import Layout from "./src/components/layout"
import NavBar from "./src/components/navbar"
import "./src/styles/global.css"

export const wrapPageElement = ({ element, props }) => {
  return (
    <>
    <Title/>
    <NavBar/>
    <Layout {...props}>{element}</Layout>
    </>
  )
}