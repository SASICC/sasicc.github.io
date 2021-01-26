import {graphql, useStaticQuery} from 'gatsby'

export default function usePortafolio() {
  const { DataPortafolio } = useStaticQuery(GET_PORTAFOLIO)
  return DataPortafolio.nodes.map(node =>{ return {...node, imagen: node.imagen.publicURL}})
}

const GET_PORTAFOLIO =  graphql`
query {
    DataPortafolio: allStrapiPortafolio(filter: {}, limit: 6) {
        nodes {
            nombre
            strapiId
            id
            descripcion
            imagen {
                publicURL
            }
            tipo_proyectos {
                nombre
                id
            }
        }
    }
}
`