const Assignment = require('../../models/assignment');


module.exports = {
    create,
    index,
    deleteAssignment,
    toggleComplete,
};

async function create(req, res) {
    req.body.user = req.user._id
    req.body.completed = false;
    req.body.timeStudied = 0;
    const assignment = await Assignment.create(req.body);
    res.json(assignment)
}

async function index(req, res) {
    const assignments = await Assignment.find({});
    res.json(assignments);
}


async function deleteAssignment(req, res) {
    const deletedAssignment = await Assignment.findById(req.params.id);
    deletedAssignment.remove();
    res.json(deletedAssignment);
}

async function toggleComplete(req, res) {
    let toggledAssignment = await Assignment.findById(req.params.id);
    toggledAssignment.completed = !toggledAssignment.completed;
    toggledAssignment.save();
    res.json(toggledAssignment);
}