import {graphql, useStaticQuery} from 'gatsby'

export default function useCagos(_id) {
  const { DataCargos } = useStaticQuery(GET_MENU)
  return DataCargos.edges.map(({node}) =>{ return {key:`${node.id}-${node.nombre}`, value: node.nombre, nombre: node.nombre}  })
}

const GET_MENU =  graphql`
query {
	DataCargos: allStrapiCargos {
        edges {
          node {
            id
            nombre
          }
        }
      },
}
`