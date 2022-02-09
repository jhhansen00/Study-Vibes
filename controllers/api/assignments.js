const assignment = require('../../models/assignment');
const Assignment = require('../../models/assignment');


module.exports = {
    create,
    index,
    show,
    deleteAssignment,
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

async function show(req, res) {
    const assignment = await Assignment.findById(req.params.id);
    res.json(assignment);
}

async function deleteAssignment(req, res) {
    const deletedAssignment = await Assignment.findById(req.params.id);
    deletedAssignment.remove();
    console.log(deletedAssignment);
    res.json(deletedAssignment);
}
// make a delete
// make a detail
// make a update