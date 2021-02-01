import * as React from "react"
import {Layout, Banner, SEO, About, NavBar, WrapperServices, WrapperPortafolio, WrapperFooter
        , WrapperGrayOne
        , WrapperGrayTwo
        , WrapperGrayThree } from "../components";
import bodyImg  from '../assets/images/img-body-1.jpg'
import "../assets/styles/style.less";

export default function IndexPage( ){
  return (
    <Layout bodyImg={bodyImg}>
      <SEO />
      <Banner />
      <NavBar />
      <About />
      < WrapperGrayOne />
      <WrapperServices />
      <WrapperGrayTwo />
      <WrapperPortafolio />
      <WrapperGrayThree />
      <WrapperFooter />
    </Layout>
  )
}
