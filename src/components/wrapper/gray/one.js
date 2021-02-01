import  React from 'react';
import {graphql, useStaticQuery} from 'gatsby'


export const  WrapperGrayOne = () => {
  // GraphQL Query
  const { Texto, Imagen} = useStaticQuery(GET_QUERY)
  const {titulo, descripcion} = Texto

  return ( <section  className="wrapper gray">
        <div className="container"> 
            <div className="row" style={{display: 'flex'}} >
                <section className="feature  six columns fadeInLeft animated">
                    <img key={Imagen.id} src={Imagen.sizes?.src} alt={titulo} className="img left" />
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
  Texto: strapiTextos(strapiId: {eq: 9}) {
    id
    titulo
    descripcion
  }
  Imagen : imageSharp(sizes: {originalName: {eq: "responsive.png"}}) {
    id
    sizes {
      src
      originalName
    }
  }
}`;