import * as React from 'react';
import {graphql, useStaticQuery} from 'gatsby'
import UseCargo from '../hooks/useCargos'
import Profile from '../reusable/profile'
import UseEquipoTrabajo from '../hooks/useEquipoTrabajo'
import PortafolioFilter from '../reusable/portfolioFilter'

export default function WrapperTeam() {
  const { TextosEquipo } = useStaticQuery(GET_CARGOSDATA)
  const useCargo = UseCargo()
  const {titulo, descripcion} = TextosEquipo
  const useEquipoTrabajo = UseEquipoTrabajo()
  let DataStructure = []
  for (let i = 0; i < 5; i++) {
    DataStructure = useEquipoTrabajo.reduce((memo, data) => { 
      memo[i % 2].push({...data});
      return memo
    }, [[],[]])
  }
  return (<section id="equipo" className="wrapper white">
        <div className="container">
            <header className="wow fadeInDown animated">
              <h2>{titulo}</h2>
              <p>{descripcion}.</p>
            </header>
            <PortafolioFilter data={useCargo} />
            <div>
              {
                DataStructure.map((row, i) => {
                  return <div key={i} className="row">
                    {row.map((data, j) => {
                      return  <Profile {...data} />
                    })}
                  </div>
                })
              }
            </div>
          </div>
      </section>
    )
}



const GET_CARGOSDATA =  graphql`
query {
  TextosEquipo: strapiTextos(strapiId: {eq: 7}) {
    id
    titulo
    descripcion
  }
}
`