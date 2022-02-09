import { sendRequest } from "./users-api";

const BASE_URL = '/api/assignments';

export function createAssignment(details) {
    return sendRequest(BASE_URL, 'POST', details);
}

export function getAll() {
    return sendRequest(BASE_URL);
}

export function getById(id) {
    return sendRequest(`${BASE_URL}/${id}`);
}

export function deleteAssignment(id) {
    console.log(id)
    return sendRequest(`${BASE_URL}/delete/${id}`, 'DELETE');
}
