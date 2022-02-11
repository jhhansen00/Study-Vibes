import * as assignmentsAPI from '../../utilities/assignments-api';
import { useState, useEffect } from 'react';
import AssignmentsList from '../../components/AssignmentsList/AssignmentsList';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


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
        <Container className='assignments'>
            <Row>
                <Col></Col>
                <Col>
                    <AssignmentsList assignments={assignments} setAssignments={setAssignments} toggleStale={toggleStale} />
                </Col>
                <Col></Col>
            </Row>
            
        </Container>
    )
}