import * as assignmentsApi from '../../utilities/assignments-api';
import { useState } from 'react';

export default function NewAssignment() {
    const [form, setform] = useState({
        assignmentName: '',
        dueDate: ''
    })

    function handleChange(evt) {
        setform({...form, [evt.target.name]: evt.target.value});
    }

    async function handleSubmit(evt) {
        evt.preventDefault();
        try {
            const assignment = await assignmentsApi.createAssignment(form);
            setform({
                assignmentName: '',
                dueDate: ''
            });
        } catch {
            
        }
    }



    return (
        <form id="new-assignment" onSubmit={handleSubmit}>
            <div>Assignment Name:<input type="text" name="assignmentName" onChange={handleChange} value={form.assignmentName} /></div>
            <div>Due Date:<input type="datetime-local" name="dueDate" onChange={handleChange} value={form.dueDate} /></div>
            <button type="submit">Submit</button>
        </form>
    )
}