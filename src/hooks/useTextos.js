import {graphql, useStaticQuery} from 'gatsby'

export default function useTextos(_id) {
  const GET_TEXTOS =  graphql`
    query TextosData($_id: Int) {
        Textos: strapiTextos(strapiId: {eq: $_id}) {
          id
          titulo
          descripcion
        }
    }`
  const { Textos } = useStaticQuery(GET_TEXTOS)
  return {...Textos}
}
