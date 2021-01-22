import * as React from "react";
import StyleBanner from  '../styles/components/banner.less'
import UseTextos from '../hooks/useTextos'

const Banner = () => {
    const {id, titulo, descripcion} = UseTextos(1)
    return ( <section  key={id} id="banner">
        <div className="content">
          <h3 className="zoomIn animated">{titulo}</h3>
            <p>
               {descripcion}
            </p>
            <div className="actions">
                <a href="#Servicio" className="bottton">Leer mas</a>
            </div>
        </div>
      </section>
    )
}

export default Banner