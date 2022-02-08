import * as assignmentsAPI from '../../utilities/assignments-api';
import { useState, useEffect } from 'react';
import AssignmentsList from '../../components/AssignmentsList/AssignmentsList';


export default function Assignments() {
    const [assignments, setAssignments] = useState([])

    useEffect(function() {
        async function getAssignments() {
            const tasks = await assignmentsAPI.getAll();
            setAssignments(tasks);
        }
        getAssignments();
    })

    return (
        <main>
            <AssignmentsList assignments={assignments}/>
        </main>
    )
}