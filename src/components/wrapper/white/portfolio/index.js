import  React, { useState }  from 'react';
import {graphql, useStaticQuery} from 'gatsby'
// use hooks 
import UseTipoProyecto from '../../../../hooks/useTipoProyecto'
import UsePortfolio from  '../../../../hooks/usePortfolio'
// reusable
import PortafolioFilter from '../../../../reusable/portfolioFilter'
import Mix from '../../../../reusable/mix'

export const  WrapperPortafolio = () => {
  // GraphQL Query
  const { TextosPortafolio } = useStaticQuery(GET_PORTAFOLIO)
  const {titulo, descripcion} = TextosPortafolio
  //  use Hooks
  const useTipoProyecto = UseTipoProyecto()
  const usePortfolio = UsePortfolio()

  const [useFilter, setFilter] = useState('all')

  const onChange = (nombre) => {
    setFilter(nombre)
  }

  let DataStructure = []
  for (let i = 0; i < 5; i++) {
    DataStructure = usePortfolio.reduce((memo, data) => { 
      if (useFilter != 'all' && !data.tipo_proyectos.includes(useFilter)) return memo
      memo[i % 2].push({...data});
      return memo
    }, [[],[]])
  }

  return ( <section id="portafolio" className="wrapper white">
        <div className="container">
            <header className="wow fadeInDown animated">
              <h2>{titulo}</h2> 
              <p>{descripcion}.</p>
            </header> 
            <PortafolioFilter onChange={onChange} data={useTipoProyecto} />
            <div className='portfolio'>
              {
                  DataStructure.map((row, i) => {
                    return <div key={i} className="row">
                      {row.map((data, j) => {
                        return  <Mix {...data} />
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

const GET_PORTAFOLIO =  graphql`
query {
  TextosPortafolio: strapiTextos(strapiId: {eq: 8}) {
    id
    titulo
    descripcion
  }
}`;