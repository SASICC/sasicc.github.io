import  React from 'react';
import {graphql, useStaticQuery} from 'gatsby'


export const  WrapperGrayOne = () => {
  // GraphQL Query
  const { Texto, Imagen} = useStaticQuery(GET_QUERY)
  const {titulo, descripcion} = Texto

  console.log(Imagen);

  return ( <section  className="wrapper gray">
        <div className="container"> 
            <div className="row" style={{display: 'flex'}} >
                <section class="feature  six columns fadeInLeft animated">
                    <img key={Imagen.id} src={Imagen.sizes?.src} class="img" />
                </section>
                <section class="feature six columns fadeInRight animated">
                    <div class="content">
                        <h2>{titulo}</h2>
                        <p>{descripcion}</p>
                        <div className="actions"> 
                          <a class=" button button-blue">Leer mas</a>
                        </div>
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
  Imagen : imageSharp(sizes: {originalName: {eq: "iphone-1.png"}}) {
    id
    sizes {
      src
      originalName
    }
  }
}`;