
import AssignmentListItem from '../AssignmentListItem/AssignmentListItem';

export default function AssignmentsList({assignments, handleSelection}) {
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

