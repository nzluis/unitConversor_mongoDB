const express = require('express');
const MeasureRecords = require('../model/measureRecords')

const recordsRouter = express.Router()

recordsRouter.get('/api/saved', async (req, res) => {
  try {
    const records = await MeasureRecords.find();
    res.json(records);
  } catch (error) {
    res.status(500).json({ error: 'Error getting data.' });
  }
});

recordsRouter.post('/api/saved/new', async (req, res) => {
    try {
        const { input, inputMeasure, result, resultMeasure } = req.body;
        const newRecord = new MeasureRecords({
            input,
            inputMeasure,
            result,
            resultMeasure,
    });
    await newRecord.save();
    res.status(201).json({ message: "Added successfully"});
    }catch (error) {
        res.status(500).json( {error: "Error posting data"})
    }
})

recordsRouter.delete('/api/saved/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await MeasureRecords.findByIdAndDelete(id)
        .then(doc => {
            res.json({ message: `Data deleted successfully: ${doc}` });
        });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting data' });
  }
});

module.exports = {recordsRouter}