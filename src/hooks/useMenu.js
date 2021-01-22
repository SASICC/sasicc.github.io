import {graphql, useStaticQuery} from 'gatsby'

export default function useMenus(_id) {
  const { OptionsMenu } = useStaticQuery(GET_MENU)
  
  return OptionsMenu.edges.map(({node}) =>{ return {key:node.nombre, value: node.nombre, nombre: node.nombre}  })
}

const GET_MENU =  graphql`
query {
	OptionsMenu: allStrapiMenu(sort: {fields: id}) {
	edges {
			node {
				nombre
			}
		}
	}
}
`