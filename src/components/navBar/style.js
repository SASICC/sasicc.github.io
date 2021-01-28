
import styled from 'styled-components';

export const Navbar = styled.header`
    position: relative ;
    height:3em;
    background-color:#ffffff ;
    color: #202222;
    cursor: default;
    width: 100%;
    border-bottom:  1px solid #e7e7e7;
`;

export const NavbarHeader = styled.div`
    text-align: left;
    position: absolute;
    left: 5em;
    height:3em;
    line-height: 3em;
`
export const NavbarA = styled.a`
    direction: rtl;
    font-style: normal;
    text-align: center;
    letter-spacing: 5px;
    text-decoration: none;
    text-transform: uppercase;
    color: #035;
`

export const NavbarTitle  = styled.p`
    display: block;
    color: #035;
    font-size: 1.1em;
    font-weight: 300;
    text-align: center;
    letter-spacing: 3px;
    text-transform: uppercase;
`

export const Nav  = styled.nav`
    float:right;
    position: absolute;
    right:1em;
    left:0;
    height: 3em;
    line-height: 3em;
    text-align: right;
    vertical-align: middle;
`

export const Ul  = styled.ul`
    float:right;
    position: absolute;
    right:1em;
    left:0;
    height: 3em;
    line-height: 3em;
    text-align: right;
    vertical-align: middle;
`

export const Li  = styled.li`
    float:right;
    position: absolute;
    right:1em;
    left:0;
    height: 3em;
    line-height: 3em;
    text-align: right;
    vertical-align: middle;
`

export const LiA  = styled.a`
    -moz-transition: color 0.2s ease-in-out;
    -webkit-transition: color 0.2s ease-in-out;
    -o-transition: color 0.2s ease-in-out;
    -ms-transition: color 0.2s ease-in-out;
    transition: color 0.2s ease-in-out;
    color: #003254;
    text-align: center;
    display: inline-block;
    text-decoration: none;
    text-transform: uppercase !important;
    font-size: 0.8em;
`
