import * as assignmentsAPI from '../../utilities/assignments-api';
import { useState, useEffect } from 'react';
import AssignmentsList from '../../components/AssignmentsList/AssignmentsList';



export default function Assignments() {
    const [assignments, setAssignments] = useState([])
    const [selectedAssignment, setSelectedAssignment] = useState({})

    function handleSelection(assignmentId) {
        const selectedAssignment = assignments.filter(a => a._id === assignmentId)
        setSelectedAssignment(selectedAssignment);
    }

    useEffect(function() {
        async function getAssignments() {
            const tasks = await assignmentsAPI.getAll();
            setAssignments(tasks);
        }
        getAssignments();
    },[]);

    return (
        <main>
            <AssignmentsList assignments={assignments} handleSelection={handleSelection}/>
        </main>
    )
}