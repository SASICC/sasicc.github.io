import React from 'react';
import {graphql, useStaticQuery} from 'gatsby'

export const WrapperTexts = ({_id}) => {
  const data = useStaticQuery(GET_TEXTOS)
  let {titulo} = data.Textos.nodes.find(({strapiId}) => strapiId === _id )
  return (<section className="wrapper img one">
        <div className="container wow fadeInDown animated">
            <h2>{titulo}</h2>
        </div>
    </section>
    )
}

const GET_TEXTOS = graphql`
    query{
        Textos: allStrapiTextos {
            nodes {
              titulo
              descripcion
              id
              strapiId
            }
          }
    }
`