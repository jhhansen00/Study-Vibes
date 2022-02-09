import { Link } from 'react-router-dom';
import './AssignmentListItem.css'

export default function AssignmentListItem({assignment, handleSelection}) {

    return (
        <div class="assignment" onClick={() => handleSelection(assignment._id)}>
            <p>Task Name: {assignment.assignmentName}</p>
            <p>Due: {assignment.dueDate}</p>
            <p>Completed? {assignment.completed.toString().toUpperCase()}</p>
            <button>Edit</button>
            <button>Delete</button>
        </div>
    )
}
