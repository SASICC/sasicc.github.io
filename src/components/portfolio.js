import * as React from 'react';
import {graphql, useStaticQuery} from 'gatsby'
// use hooks 
import UseTipoProyecto from '../hooks/useTipoProyecto'
import UsePortfolio from  '../hooks/usePortfolio'
// reusable
import PortafolioFilter from '../reusable/portfolioFilter'
import Mix from '../reusable/mix'

export default function WrapperPortafolio(_id) {
  // GraphQL Query
  const { TextosPortafolio } = useStaticQuery(GET_PORTAFOLIO)
  const {titulo, descripcion} = TextosPortafolio
  //  use Hooks
  const useTipoProyecto = UseTipoProyecto()
  const usePortfolio = UsePortfolio()

  let DataStructure = []
  for (let i = 0; i < 5; i++) {
    DataStructure = usePortfolio.reduce((memo, data) => { 
      memo[i % 2].push({...data});
      return memo
    }, [[],[]])
  }
  console.log(DataStructure)
  return ( <section id="portafolio" className="wrapper white">
        <div className="container">
            <header className="wow fadeInDown animated">
              <h2>{titulo}</h2> 
              <p>{descripcion}.</p>
            </header> 
            <PortafolioFilter data={useTipoProyecto} />
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