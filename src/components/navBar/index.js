import * as React from 'react';
import UseMenu from '../../hooks/useMenu'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import {Navbar, NavbarHeader, NavbarA, Nav, Ul, Li} from './style'

export const NavBar = () => {
	const USEMENU = UseMenu()
    return(
        <Navbar  >
			<NavbarHeader className="navbar-header">
				<NavbarA className="navbar-title" href="#">SASICC</NavbarA>
			</NavbarHeader>
			<Nav id="nav">
				<Ul>
					<Li key="banner" ><AnchorLink href="#banner">Inicio</AnchorLink></Li>
						{
							USEMENU.map(({value, nombre})=>{
							return <Li key={`${value}`}><AnchorLink href={`#${value}`}>{nombre}</AnchorLink></Li>
							})		
						}
					<Li key='contact'><AnchorLink href="#footer">Contacto</AnchorLink></Li>
				</Ul>
			</Nav>
		</Navbar>
    )
} 