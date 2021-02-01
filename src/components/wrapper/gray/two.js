import  React from 'react';
import {graphql, useStaticQuery} from 'gatsby'
import imgen from   '../../../assets/images/experiencia.svg'

export const  WrapperGrayTwo = () => {
  // GraphQL Query
  const { Texto, Imagen} = useStaticQuery(GET_QUERY)
  const {titulo, descripcion} = Texto

  return ( <section  className="wrapper gray">
        <div className="container"> 
            <div className="row" style={{display: 'flex'}} >
                <section className="feature six columns fadeInRight animated">
                    <div className="content">
                        <h2>{titulo}</h2>
                        <p>{descripcion}</p>
                    </div>
                </section>
                <section className="feature  six columns fadeInLeft animated">
                    <img key={Imagen?.id} src={imgen} alt={titulo} className="img right" />
                </section>
                
            </div>
        </div>
      </section>
    )
}

const GET_QUERY =  graphql`
query {
  Texto: strapiTextos(strapiId: {eq: 10}) {
    id
    titulo
    descripcion
  }
}`;