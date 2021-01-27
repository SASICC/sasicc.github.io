import React, { useState }  from 'react';
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

  const [useFilter, setFilter] = useState('all')

  const onChange = (nombre) => {
    setFilter(nombre)
  }

  let DataStructure = []
  for (let i = 0; i < 5; i++) {
    DataStructure = useEquipoTrabajo.reduce((memo, data) => { 
      if (useFilter != 'all' && !data.cargos.includes(useFilter)) return memo
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
            <PortafolioFilter onChange={onChange} data={useCargo} />
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
            <div className="actions">
              <a className="button button-blue">Leer mas</a>
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