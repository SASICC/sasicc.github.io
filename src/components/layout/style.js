import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
body, input, select, textarea {
	color: @primary;
	font-family: "Lato", Helvetica, sans-serif !important;
	font-size: 15pt;
	font-weight: 300;
	line-height: 1.65em;
	z-index: 1;
	margin: 0;
	padding: 0;
    background-image: url();
	background-position: center;
	background-size:cover;
	background-attachment: scroll, fixed;
}

body {
	background-image: url(${ props  => (props.backgroundImage === '' ? '#fff'  : props.backgroundImage)});
	background-position: center;    
	background-size: auto, cover;
	background-attachment: scroll, fixed;
}


a {
	color: @primary;
	text-decoration: underline;
}

a:hover {
	text-decoration: none;
}

strong, b {
	color:@primary;
	font-weight: 400;
}

em, i {
	font-style: italic;
	text-align: center;
}

p {
	margin: 0 0 2px 0;	
}

h1, h2, h3, h4, h5, h6 {
	color: @textColor;
	font-weight: 300;
	line-height: 1.5em;
	margin: 0 0 1em 0;
}

h1 a, h2 a, h3 a, h4 a, h5 a, h6 a {
	color: @textColor;
	text-decoration: none;
}

h2 {
	font-size: 1.75em;
	
}

h3 {
	font-size: 1.35em;
}
img {
    max-width: 100%;
}
.container {
    margin-left: auto;
    margin-right: auto;
    width: 1200px
}

.scrollbars{
	position:absolute !important;
}
.wrapper {
	padding: 3em 0em 3em;
}



.button {
    display: inline-block;
    margin-right: 10px;
    margin-left: 10px;
    padding: 10px 30px;
    border-radius: 4px;
    -webkit-transition: background-color 300ms ease, border 300ms ease, color 300ms ease;
    transition: background-color 300ms ease, border 300ms ease, color 300ms ease;
    line-height: 21px;
    font-weight: 300;
    letter-spacing: 2px;
    text-decoration: none;
    text-transform: uppercase;
}

.button-blue {
    border: 1px solid #035;
    color: #035;
}

.button-white {
    border: 1px solid #fff;
    color: #fff;
}
`;