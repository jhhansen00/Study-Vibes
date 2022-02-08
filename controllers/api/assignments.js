const Assignment = require('../../models/assignment');
const { default: Assignments } = require('../../src/pages/Assignments/Assignments');

module.exports = {
    create,
};

async function create(req, res) {
    req.body.user = req.user._id
    req.body.completed = false;
    const assignment = await Assignment.create(req.body);
    res.json(assignment)
}

async function index(req, res) {
    const assignments = await Assignment.find({});
    res.json(assignments);
}
// make a delete
// make a detail
// make a update