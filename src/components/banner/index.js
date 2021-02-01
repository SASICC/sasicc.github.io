import * as React from "react";
import UseTextos from '../../hooks/useTextos'

export const Banner = () => {
    const {id, titulo, descripcion} = UseTextos(4)
    return (  <section  key={id} id="banner">
    <div className="content">
      <h3 className="zoomIn animated">{titulo}</h3>
        <p>{descripcion}</p>
        <div className="actions">
            <a href="#servicio" className="bottton">Leer mas</a>
        </div>
    </div>
  </section>
    )
}