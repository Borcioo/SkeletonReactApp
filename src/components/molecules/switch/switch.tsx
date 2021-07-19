import React from 'react'
import { SwitchLabel, SwitchButton, SwitchInput } from './switchStyles'
import { SwitchInterface } from './switchInterface'

const Switch = (props: SwitchInterface) => {
	const { id, toggled, onChange } = props
	return (
		<>
			<SwitchInput id={id} type='checkbox' checked={toggled} onChange={onChange} />
			<SwitchLabel htmlFor={id}>
				<SwitchButton />
			</SwitchLabel>
		</>
	)
}

export default Switch
