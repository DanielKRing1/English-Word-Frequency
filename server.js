const txt2json = require('./scripts/txt2json');
const json2mongo = require('./scripts/json2mongo');

const txtPath = 'word-frequency.txt';
const jsonPath = 'word-frequency.json';
const mongoPath = 'mongodb://localhost:27017/word-frequency';

// txt2json(txtPath, 'jsonPath');

json2mongo(jsonPath, mongoPath);