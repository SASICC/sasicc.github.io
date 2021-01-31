import * as React from 'react';
import {graphql, useStaticQuery} from 'gatsby'
import IconDiamond from '../../../../reusable/iconDiamond'

export const WrapperServices = () => {
  const { DataServicios, TextosServicio } = useStaticQuery(GET_SERVICIOSDATA)
  const SERVICIOS_DATA = DataServicios.edges.map(({node}) =>{ return {...node}  })
  const {titulo, descripcion} = TextosServicio

  const DataStructure = SERVICIOS_DATA.reduce((memo, data, i) => {
    memo[i % 3].push({...data});
    return memo
  }, [[],[],[]])

  return (
        <section id="servicios" className="wrapper white">
          <div className="container">
            <header className="wow fadeInDown animated">
              <h2>{titulo}</h2>
              <p>{descripcion}.</p>
            </header>
            {
              DataStructure.map((row, i) => {
                return <div key={i} className="row">
                  {row.map((data, j) => {
                    return <section key={j} className="4u 6u(medium) 12u$(small) fadeInRight animated">
                      <div className="box">
                        <IconDiamond {...data} />
                        <a href="hosting.html" className="button button-blue">Leer mas</a>
                      </div>
                  </section>
                  })}
                </div>
              })
            } 
          </div>
      </section>
    )
}



const GET_SERVICIOSDATA =  graphql`
query {
	DataServicios: allStrapiServicios {
    edges {
      node {
        id
        icono
        titulo
        descripcion
      }
    }
  },
  TextosServicio: strapiTextos(strapiId: {eq: 6}) {
    id
    titulo
    descripcion
  }
}
`