import  React from 'react';
import {graphql, useStaticQuery} from 'gatsby'
import imagen from '../../../assets/images/about-extra-2.svg'

export const  WrapperGrayThree = () => {
  // GraphQL Query
  const { Texto} = useStaticQuery(GET_QUERY)
  const {titulo, descripcion} = Texto

  return ( <section  className="wrapper gray">
        <div className="container"> 
            <div className="row" style={{display: 'flex'}} >
                <section className="feature  six columns fadeInLeft animated">
                    <img key={imagen} src={imagen} className="img left" alt={imagen} style={{height: '300px', width: '454px'}}/>
                </section>
                <section className="feature six columns fadeInRight animated">
                    <div className="content">
                        <h2>{titulo}</h2>
                        <p>{descripcion}</p>
                    </div>
                </section>
            </div>
        </div>
      </section>
    )
}

const GET_QUERY =  graphql`
query {
  Texto: strapiTextos(strapiId: {eq: 11}) {
    id
    titulo
    descripcion
  }
}`;