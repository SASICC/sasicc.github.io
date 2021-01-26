import * as React from "react"
import Styles from '../styles/style.less'
import Helmet  from 'react-helmet';
import Banner from '../components/banner'
import NavBar from '../components/navbar'
import About from '../components/about'
import Services from '../components/services';
import Team from '../components/team'
import Portafolio from '../components/portfolio'

export default function IndexPage( ){
  return (
    <main>
      <Helmet>
        <meta charset="UTF-8" />
        <title>SASICC</title>
        <link rel="shortcut icon" type="image/x-icon" href="../images/cloud01.png" />
	      <meta http-equiv="content-type" content="text/html; charset=utf-8" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous" />
        <link href="https://fonts.googleapis.com/css?family=Lato:300,400" rel="stylesheet" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/skel/3.0.1/skel.min.js" integrity="sha512-LpUt6fJuTMm3o0q5w8ydMXpGho2tqAoaRu6MP6Tt0X0Klct8xlToutBk7Wh51RL9n7/QSplQnrUA1U3S5YzMng==" crossorigin="anonymous"></script>
      </Helmet>
      <Banner />
      <NavBar />  
      <About />
      <Services />
      <Team /> 
      <Portafolio />
      
      <script src="../js/init.js"></script> 
    </main>
  )
}
