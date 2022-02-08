
import AssignmentListItem from '../AssignmentListItem';

export default function AssignmentsList(assignments) {
    const items = assignments.map(item =>
        <AssignmentListItem 
        key={item._id}
        assignment={item}
        />);
    return (    
        <main>
            {items}
        </main>
    )
}

