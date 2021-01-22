import * as React from "react"
import Styles from '../styles/style.less'
import Helmet  from 'react-helmet';
import Banner from '../components/banner'
import NavBar from '../components/navbar'
import About from '../components/about'
// markup
const IndexPage = () => {
  return (
    <main>
      <Helmet>
        <meta charset="UTF-8" />
        <title>SASICC</title>
        <link rel="shortcut icon" type="image/x-icon" href="images/cloud01.png" />
	      <meta http-equiv="content-type" content="text/html; charset=utf-8" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous" />
        <link href="https://fonts.googleapis.com/css?family=Lato:300,400" rel="stylesheet" />
      </Helmet>
      <Banner />
      <NavBar />  
      <About />
    
    </main>
  )
}

export default IndexPage