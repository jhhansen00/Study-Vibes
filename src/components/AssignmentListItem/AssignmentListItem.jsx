import { Link } from 'react-router-dom';
import './AssignmentListItem.css'
import * as assignmentsApi from '../../utilities/assignments-api';

export default function AssignmentListItem({assignment, assignments, setAssignments }) {

    async function handleDelete(evt) {
        evt.preventDefault();
        const deletedAssignment = assignmentsApi.deleteAssignment(assignment._id);
        let assignmentsCopy = [...assignments];
        let newAssignmentList = assignmentsCopy.map(function(a) {
            if (a._id !== deletedAssignment._id)
            return a; 
        })
        setAssignments(newAssignmentList);
    }

    return (
        <div className="assignment" >
            <p>Task Name: {assignment.assignmentName}</p>
            <p>Due: {assignment.dueDate}</p>
            <p>Completed? {assignment.completed.toString().toUpperCase()}</p>
            <button>Edit</button>
            <form id="delete" onSubmit={handleDelete} type='submit'><button>Delete</button></form>
        </div>
    )
}
