import * as React from 'react';
import UseMenu from '../../hooks/useMenu'
import AnchorLink from 'react-anchor-link-smooth-scroll';

export const NavBar = () => {
	const USEMENU = UseMenu()
    return(<header className="navbar" >
			<div className="navbar-header">
				<a className="navbar-title" href="#">SASICC</a>
			</div>
			<nav id="nav">
				<ul>
					<li key="banner" ><AnchorLink href="#banner">Inicio</AnchorLink></li>
						{
							USEMENU.map(({value, nombre})=>{
							return <li key={`${value}`}><AnchorLink href={`#${value}`}>{nombre}</AnchorLink></li>
							})		
						}
					<li key='contact'><AnchorLink href="#footer">Contacto</AnchorLink></li>
				</ul>
			</nav>
		</header>
    )
} 