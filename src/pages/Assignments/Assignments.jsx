import * as assignmentsAPI from '../../utilities/assignments-api';
import { useState, useEffect } from 'react';
import AssignmentsList from '../../components/AssignmentsList/AssignmentsList';



export default function Assignments() {
    const [assignments, setAssignments] = useState([]);
    const [stale, setStale] = useState(false);
    useEffect( async function() {
        async function getAssignments() {
            const tasks = await assignmentsAPI.getAll();
            setAssignments(tasks);
        }
        getAssignments();
    },[stale]);

    function toggleStale() {
        setStale(!stale);
    }

    return (
        <main>
            <AssignmentsList assignments={assignments} setAssignments={setAssignments} toggleStale={toggleStale} />
            
        </main>
    )
}