import * as React from "react"
import {Layout,Banner,SEO,About, NavBar  } from "../components";
import bodyImg  from '../images/img-body-1.jpg'

export default function IndexPage( ){
  return (
    <Layout bodyImg={bodyImg}>
      <SEO />
      <Banner />
      <NavBar />
      <About />
    </Layout>
  )
}
