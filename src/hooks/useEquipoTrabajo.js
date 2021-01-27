import {graphql, useStaticQuery} from 'gatsby'

export default function useCagos(_id) {
  const { DataEquipoTrabajo } = useStaticQuery(GET_MENU)
  return DataEquipoTrabajo.edges.map(({node}) =>{ return {...node, 
    foto: node.fotos.publicURL,
    cargos:  node.cargos.map(({nombre})=>nombre )
  }})
}

const GET_MENU =  graphql`
query {
    DataEquipoTrabajo: allStrapiEquipoTrabajo(filter: {}, limit: 6) {
      edges {
        node {
          id
          nombre
          strapiId
          descripcion
          cargos {
            nombre
            id
          }
          fotos {
            publicURL
          }
          habilidades {
            nombre
          }
          redes {
            icono
            link
            nombre
          }
        }
      }
    }
}
`