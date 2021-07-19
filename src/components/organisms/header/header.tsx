import React, { useContext, useState } from 'react'
import { ThemeContext } from 'styled-components'
import Switch from '../../molecules/switch/switch'

import Container from './headerStyles'

const Header = () => {
	const [isToggled, setIsToggled] = useState(false)
	return (
		<Container darkMode={isToggled}>
			<Switch
				id='test-switch'
				toggled={isToggled}
				onChange={e => setIsToggled(e.target.checked)}
			/>
		</Container>
	)
}

export default Header
