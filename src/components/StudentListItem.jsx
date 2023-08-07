import React from 'react'
import StudentScoreObject from './StudentScoreObject'


function StudentListItem(props) {

	const scoreList = props.data.scores.map((scoreObject, i)=> {
		return <StudentScoreObject grade={scoreObject.score} date={scoreObject.date} key={i} />
	})

	return (
		<div className='StudentListItem'>
			<h3>{props.data.name}</h3>
			<b>Bio</b>
			<p>{props.data.bio}</p>
			<div><b>Score List:</b> <div>{scoreList}</div></div>
		</div>
	)
}

export default StudentListItem
