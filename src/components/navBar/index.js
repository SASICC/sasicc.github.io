import React, { useState, useEffect } from 'react';
import UseMenu from '../../hooks/useMenu'
import AnchorLink from 'react-anchor-link-smooth-scroll';

export const NavBar = () => {
	const [scrolled, setScrolled ]= useState(false);
	const USEMENU = UseMenu()
	
	const handleScroll=() => {
	const offset = window.scrollY;
		if ( offset > 700 ) setScrolled(true);
		else setScrolled(false);
	}
	useEffect(() => {
		window.addEventListener( 'scroll', handleScroll )
	})

	let navFixed = 'navbar';

	if(scrolled)  navFixed = 'navbar nav-fixed'

    return(<header className={`${navFixed}`} >
			<div className="navbar-header">
				<a className="navbar-title" href="#banner">SASICC</a>
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