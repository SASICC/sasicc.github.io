import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class IconDiamond extends PureComponent {
    render() {
        const  {id ,strapiId, titulo, descripcion, icono } = this.props
        return (<section key={`${id}-${strapiId}`} className="feature fadeInLeft animated">
            <div className="diamond">
                <i className={`fa  ${icono} fa-4x`}></i>
            </div>
            <div className="content">
                <h2>{titulo}</h2>
                <p>{descripcion}</p>
            </div>
        </section>
        );
    }
}

IconDiamond.propTypes = {
    titulo: PropTypes.string, 
    descripcion: PropTypes.string,
    icono: PropTypes.string,
};

export default IconDiamond;