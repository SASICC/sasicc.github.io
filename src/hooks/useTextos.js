import {graphql, useStaticQuery} from 'gatsby'

export default function useTextos(_id) {
  const { Textos } = useStaticQuery(GET_TEXTOS)
  return {...Textos}
}


const GET_TEXTOS =  graphql`
query {
    Textos: strapiTextos(strapiId: {eq: 1}) {
        id
        titulo
        descripcion
    }
}
`
