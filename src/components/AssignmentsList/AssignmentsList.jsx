
import AssignmentListItem from '../AssignmentListItem/AssignmentListItem';

export default function AssignmentsList({assignments, setAssignments }) {
    const items = assignments.map(item =>
        <AssignmentListItem 
        key={item._id}
        assignments={assignments}
        setAssignments={setAssignments}
        assignment={item}
        />);
    return (    
        <main>
            {items}
        </main>
    )
}

