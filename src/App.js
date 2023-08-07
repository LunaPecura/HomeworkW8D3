import './App.css';
import students from './models/studentData'
import StudentList from './components/StudentList';

function App() {


	return (
		<div className="App">
			<h1>Student Grade Book</h1>
			<StudentList students={students} />
		</div>
	);
}

export default App;
