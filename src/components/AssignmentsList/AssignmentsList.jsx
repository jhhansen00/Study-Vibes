import './AssignmentsList.css'
import AssignmentListItem from '../AssignmentListItem/AssignmentListItem';

export default function AssignmentsList({assignments, setAssignments, toggleStale}) {
    const items = assignments.map(item =>
        <AssignmentListItem 
        key={item._id}
        assignments={assignments}
        setAssignments={setAssignments}
        assignment={item}
        toggleStale={toggleStale}
        />);
    return (    
        <main className='assignmentsList'>
            {items}
        </main>
    )
}

