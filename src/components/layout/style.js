import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`

body {
	background-image: url(${ props  => (props.backgroundImage === '' ? '#fff'  : props.backgroundImage)});
	background-position: center;    
	background-size: auto, cover;
	background-attachment: scroll, fixed;
}
`;