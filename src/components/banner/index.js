import * as React from "react";
import UseTextos from '../../hooks/useTextos'
import {Section, Content, P, H3 , Actions, Button } from './style'

export const Banner = () => {
    const {id, titulo, descripcion} = UseTextos(4)
    return ( <Section   key={id} id="banner">
        <Content className="content">
          <H3 className="zoomIn animated">{titulo}</H3>
            <P>{descripcion}</P>
            <Actions class  Name="actions">
                <a href="#Servicio" className="button button-white ">Leer mas</a>
            </Actions>
        </Content>
      </Section>
    )
}

/**/ 