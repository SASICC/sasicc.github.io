import * as React from 'react';
import Styles from '../styles/components/navbar.less'
import UseMenu from '../hooks/useMenu'

const NavBar = () => {
	const USEMENU = UseMenu()
    return(
        <header  className="navbar" >
			<div className="navbar-header">
				<a className="navbar-title" href="#">SASICC</a>
			</div>
			<nav id="nav">
				<ul>
					<li ><a href="#banner">Inicio</a></li>
					{
						USEMENU.map(({value, nombre})=>{
							return <li key={`#${value}`}><a href={`#${value}`}>{nombre}</a></li>
						})		
					}
					<li key='contact'><a href="#footer">Contacto</a></li>
					<li key='contact'><a href="">Ingresar</a></li>
				</ul>
			</nav>
		</header>
    )
}
 export default NavBar 