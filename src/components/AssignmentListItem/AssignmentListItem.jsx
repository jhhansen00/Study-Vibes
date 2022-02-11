import './AssignmentListItem.css'
import * as assignmentsApi from '../../utilities/assignments-api';
import Container from 'react-bootstrap/Container'

export default function AssignmentListItem({assignment, toggleStale }) {

    async function handleClick(evt) {
        
    }

    async function handleDelete(evt) {
        evt.preventDefault();
        const deletedAssignment = await assignmentsApi.deleteAssignment(assignment._id);
        toggleStale();
    }

    return (
        <Container className="assignment" >
            <p>Task Name: {assignment.assignmentName}</p>
            <p>Due: {assignment.dueDate}</p>
            <p>Time Studied(mins): {assignment.timeStudied}</p>
            <p>Completed? {assignment.completed.toString().toUpperCase()}</p>
            <button onClick={handleClick}>Edit</button>
            <form id="delete" onSubmit={handleDelete} type='submit'><button>Delete</button></form>
        </Container>
    )
}