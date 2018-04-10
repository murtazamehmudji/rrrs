var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var RequestSchema = new Schema({
    user: {type: Schema.ObjectId, ref: 'User', required: true},
    address: {lat: {type: Number, required: true}, lng: {type: Number, required: true}},
    status: {type: String, required: true, enum: ['submitted', 'engineerAlloted', 'contractorAlloted', 'processing', 'completed'], default: 'submitted'}
});

module.exports = mongoose.model("Request", RequestSchema);