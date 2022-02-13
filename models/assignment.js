const mongoose = require('mongoose');
const Schema =  mongoose.Schema;

const assignmentSchema = new Schema({
    assignmentName: {
        type: String,
        required: true
    },
    dueDate: {
        type: Date,
        required: true,
    },
    completed: {
        type: Boolean,
        default: false,
    }, 
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
    // make an array call 'sessions' it will hold object ids that will reference the session model
    // make a session model and routes and api
}, {
    timestamps: true
});

module.exports = mongoose.model('Assignment', assignmentSchema);