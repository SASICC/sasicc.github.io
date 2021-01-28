import * as React from 'react';
import {graphql, useStaticQuery} from 'gatsby'
import IconDiamond from '../../../reusable/iconDiamond'
import {WrapperWhite, Header, HeaderH2, FeatureH2, HeaderP} from '../style'

export const About = () => {
  const { DataAbout, TextosAbout } = useStaticQuery(GET_ABOUTDATA)
  const ABOUT_DATA = DataAbout.edges.map(({node}) =>{ return {...node}  })
  const {titulo, descripcion} = TextosAbout
 
  return (<WrapperWhite id="nosotros" className="wrapper">
          <div className="container">
            <Header className="wow fadeInDown animated">
              <HeaderH2>{titulo}</HeaderH2> 
              <HeaderP>{descripcion}.</HeaderP>
            </Header> 
            
          </div>
      </WrapperWhite>
    )
}

/*<div className="row">
              {
                ABOUT_DATA.map((data, i)=> {
                  return <IconDiamond key={i} {...data} />
                })
              }
            </div>*/ 


const GET_ABOUTDATA=  graphql`
query {
	DataAbout: allStrapiNosotros(limit: 3) {
    edges { 
      node {
        id
        strapiId
        titulo
        descripcion
        icono
      }
    }
  },
  TextosAbout: strapiTextos(strapiId: {eq: 5}) {
    id
    titulo
    descripcion
  }
}
`