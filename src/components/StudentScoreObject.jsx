import React from 'react'

function StudentScoreObject(props) {


	return (
		<div className='StudentScoreObject'>
			<span>Date: {props.date} | </span>
			<span>Grade: {props.grade}</span>
		</div>
	)
}

export default StudentScoreObject
