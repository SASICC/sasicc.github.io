import * as React from "react"
import {Layout,Banner,SEO,About, NavBar, WrapperServices, WrapperTeam,WrapperPortafolio } from "../components";
import bodyImg  from '../images/img-body-1.jpg'
import {  } from "../styles/style.less";

export default function IndexPage( ){
  return (
    <Layout bodyImg={bodyImg}>
      <SEO />
      <Banner />
      <NavBar />
      <About />
      <WrapperServices />
      <WrapperTeam />
      <WrapperPortafolio />
    </Layout>
  )
}
