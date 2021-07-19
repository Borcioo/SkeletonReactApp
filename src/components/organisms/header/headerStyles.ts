import styled from 'styled-components'
import { Props } from './headerInterafce'

const Container = styled.div<Props>`
	height: 100vh;
	transition: background-color 300ms linear;
	padding: 1em;
	background-color: ${props => (props.darkMode ? '#222' : 'white')};
`

export default Container
