import React, { useState } from 'react'

const Counter = () => {
	const [state, setState] = useState('a')

	const odpocitajA = () => {
		console.log(state)
		const array = state.split('')
		const vysledok = array.splice(0, array.length - 1).join('')
		setState(vysledok)
	}

	return (
		<div style={{ textAlign: 'center' }}>
			aktualny stav: {state}
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					marginTop: '10px',
				}}>
				<div style={{ marginRight: '10px' }}>
					<button onClick={() => setState('a')}>Reset stavu</button>
				</div>
				<div style={{ marginRight: '10px' }}>
					<button onClick={() => setState(state + 'a')}>+</button>
				</div>
				<div>
					<button onClick={odpocitajA}>-</button>
				</div>
			</div>
		</div>
	)
}

export default Counter
