import * as React from 'react';
import Styles from '../styles/components/navbar.less'
import {graphql, useStaticQuery} from 'gatsby'


const GET_DATA =  graphql`
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
  }
  TextosAbout:strapiTextos(strapiId: {eq: 5}) {
    id
    titulo
    descripcion
  }
}
`

export default function WrapperAbout(_id) {
  const { OptioAbout, TextosAbout } = useStaticQuery(GET_DATA)
  const ABOUT_DATA = OptioAbout.edges.map(({node}) =>{ return {...node}  })
  return (
        <section id="Nosotros" className="wrapper white">
          <div className="container">
          <header className="wow fadeInDown animated">
            <h2>NOSOTROS</h2>
            <p>Somos un equipo nuevo con experiencia en desarrollo de software y páginas web.</p>
          </header>
          <div className="row">
            {
              ABOUT_DATA.map(({strapiId, }))
            }
            <section className="feature fadeInLeft animated">
              <div className="diamond">
                <i className="fa  fa-heart fa-4x"></i>
              </div>
              <div className="content">
                <h2>HONESTIDAD</h2>
                <p>Nuestra mayor fortaleza son nuestros valores, por sobre todo la honestidad con nuestros clientes.</p>
              </div>
            </section>
            <section className="feature  fadeInUp animated">
              <div className="diamond">
                <i className="fa  fa-handshake fa-4x"></i>
              </div>
              <div className="content">
                <h2>ACOMPAÑAMIENTO</h2>
                <p>Expertos,le resolverán sus dudas sobre tecnología cuando lo necesite, y sin cargo extra.</p>
              </div>
            </section>
            <section className="feature  fadeInRight animated">
              <div className="diamond">
                <i className="fa  fa-clock fa-4x"></i>
              </div>
              <div className="content">
                <h2>PUNTUALIDAD</h2>
                <p>Olvídese de esos plazos eternos que nunca se cumplen y del estrés que le causan.</p>
              </div>
            </section>

          </div>
        </div>
      </section>
    )
}



/*const WrapperAbout = () => {
    return 
}
 export default Wrapper */