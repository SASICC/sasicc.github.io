import * as React from 'react';
import {graphql, useStaticQuery} from 'gatsby'
import IconDiamond from '../reusable/iconDiamond'

export default function WrapperAbout(_id) {
  const { DataAbout, TextosAbout } = useStaticQuery(GET_ABOUTDATA)
  const ABOUT_DATA = DataAbout.edges.map(({node}) =>{ return {...node}  })
  const {titulo, descripcion} = TextosAbout
 
  return (
        <section id="nosotros" className="wrapper white">
          <div className="container">
            <header className="wow fadeInDown animated">
              <h2>{titulo}</h2> 
              <p>{descripcion}.</p>
            </header> 
            <div className="row">
              {
                ABOUT_DATA.map((data, i)=> {
                  return <IconDiamond key={i} {...data} />
                })
              }
            </div>
          </div>
      </section>
    )
}

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