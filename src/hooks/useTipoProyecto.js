import {graphql, useStaticQuery} from 'gatsby'

export default function useCagos(_id) {
  const { DataTipoProyecto } = useStaticQuery(GET_TIPOPROYECTO)
  return DataTipoProyecto.edges.map(({node}) =>{ return {key:`${node.id}-${node.nombre}`, value: node.nombre, nombre: node.nombre}  })
}

const GET_TIPOPROYECTO =  graphql`
query {
	DataTipoProyecto: allStrapiTipoProyecto {
    edges {
      node {
        nombre
        id
        strapiId
      }
    }
  }
}
`