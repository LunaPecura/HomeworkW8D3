import React from 'react'
import StudentListItem from './StudentListItem'

function StudentList(props) {

	const list = props.students.map((student, index) => {
		return <StudentListItem data={student} key={index}>{index}</StudentListItem>
	})

	return (
		<div className='StudentList'>
			{list}
		</div>
	)
}

export default StudentList
