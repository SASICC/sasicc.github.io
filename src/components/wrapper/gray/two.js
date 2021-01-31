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
                <section class="feature six columns fadeInRight animated">
                    <div class="content">
                        <h2>{titulo}</h2>
                        <p>{descripcion}</p>
                    </div>
                </section>
                <section class="feature  six columns fadeInLeft animated">
                    <img key={Imagen?.id} src={Imagen?.sizes?.src} class="img" />
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
  Imagen : imageSharp(sizes: {originalName: {eq: "experiencia.svg"}}) {
    id
    sizes {
      src
      originalName
    }
  }
}`;