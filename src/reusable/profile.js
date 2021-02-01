import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Profile extends PureComponent {
    render() {
        const  {id ,strapiId, nombre, foto, redes= [], habilidades,  descripcion } = this.props
        let habilidadesArray = habilidades.map(({nombre}, i)=>{return nombre}) 
        return (<article key={`${id}-${strapiId}`} className="team-mate  fadeInUp 3u 12u$(small)">
            <div className="member-photo">
                <img className="img-responsive" src={foto} alt={nombre} />                   
                {this.mask(redes)}
            </div>
            <div className="member-title">
                <h3>{nombre}</h3>
                <span>{habilidadesArray.join(', ')}</span>
            </div>
            <div className="member-info">
                <p>{descripcion}</p>
            </div>
            </article>
        );
    }
    mask(redes) {
        if(!redes.length) return null
        return<div className="mask">
            <ul className="clearfix">
                {   
                    redes.map(({nombre, link, icono}, i)=>{
                        return <li key={`${nombre}-${i}`}><a href={link} target="_blank" rel="noopener noreferrer"> <i className={`fab  ${icono}`}></i></a></li>
                    })
                }
            </ul>
        </div>

    }
}   


Profile.propTypes = {
    titulo: PropTypes.string, 
    descripcion: PropTypes.string,
    icono: PropTypes.string,
};

export default Profile;