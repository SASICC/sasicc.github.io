import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Profile extends PureComponent {
    render() {
        const  {id ,strapiId, link, imagen, nombre, descripcion } = this.props
        return (<div key={`${id}-${strapiId}`} className="mix ">
        <a href={link} target="_blank" data-largesrc={link} data-title={descripcion} >
          <img src={imagen} alt={nombre} />
          <div className="hover-mask">
            <h3>{nombre}</h3>
            <p>{descripcion} </p>
          </div>
        </a>
    </div>
        );
    }
}   


Profile.propTypes = {
    nombre: PropTypes.string, 
    descripcion: PropTypes.string,
    icono: PropTypes.string,
};

export default Profile;