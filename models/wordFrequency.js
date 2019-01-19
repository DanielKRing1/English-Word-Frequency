const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let wordFrequencySchema = new Schema({
    word: { type: String, required: true, unique: true },
    frequency: { type: Number, required: true }
});

let WordFrequency = mongoose.model('WordFrequency', wordFrequencySchema);
module.exports = WordFrequency;