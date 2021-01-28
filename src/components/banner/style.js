import styled from 'styled-components';

export const Section = styled.div`
	position: relative;
	background-image: -webkit-linear-gradient(right,rgba(0, 50, 84, .76),rgba(0, 50, 84, .76));
	background-image: -o-linear-gradient(right,rgba(0, 50, 84, .76),rgba(0, 50, 84, .76));
	background-image: linear-gradient(to left,rgba(0, 50, 84, .76),rgba(0, 50, 84, .76));
	background-position: 0px 0px, 50% 50%;
	background-size: auto, cover;
	background-attachment: scroll, fixed;
	color: rgb(255, 255, 255);
	padding: 1em 0em 1em;
	text-align: center;
	display: table;
	height: 100vh;
	width: 100%;
	left: 0;
    top: 0;
`;

export const Content = styled.div`
    height: 100%;
    margin: 0 2em 0 2em;
    padding:  10em  0 2em 0;
`
export const H3 = styled.h3`
    color: rgb(255, 255, 255);
    font-size: 2.5em;
    line-height: 1em;
    margin: 0 0 0.5em 0;
    padding: 0;
`
export const P = styled.p`
    width: 80%;
    color: rgb(255, 255, 255);
    font-size: 1.5em;
    line-height: 1em;
    margin: 2em auto;
    padding: 0;
`
export const Actions = styled.div`
    width: 80%;
    color: rgb(255, 255, 255);
    line-height: 1em;
    margin: 2em auto;
`  
 
