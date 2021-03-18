import React, { useState, useRef } from 'react'

const Input = () => {
	const [value, setValue] = useState('')
	const inputRef = useRef(null)

	const handleChange = () => {
		setValue(inputRef.current.value)
	}
	return (
		<div>
			<p>text z inputu:{value}</p>
			<input onChange={handleChange} ref={inputRef}></input>
		</div>
	)
}

export default Input
