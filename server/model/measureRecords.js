const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const MeasureRecordsSchema = new Schema({
    input: { type: String, required: true},
    inputMeasure: { type: String, required: true},
    result: { type: String, required: true},
    resultMeasure: { type: String, required: true},
})

module.exports = mongoose.model("MeasureRecords", MeasureRecordsSchema)