const fs = require('fs');
const mongoose = require('mongoose');
const WordFrequency = require('../models/wordFrequency');

const json2mongo = async (jsonPath, mongoPath) => {
    await connectToMongo(mongoPath);

    let json = JSON.parse(fs.readFileSync('word-frequency.json', 'utf8'));
    const words = Object.keys(json);

    // calculated value
    let totalFrequency = 16639558;
    // for(const word of words) {
    //     const frequency = json[word];
        
    //     totalFrequency += Number(frequency);
    // };
    // console.log(totalFrequency);

    for(const word of words) {
        const frequency = Number(json[word]) / totalFrequency;
        
        const newEntry = {
            word,
            frequency
        }
        try{
            // Try to update
            // let success = await this.findOneAndUpdate({ word }, { frequency }, { new: true});
            // if(success) return user;

            // Else create new
            success = await WordFrequency.collection.insertOne(newEntry);
        } catch(err) {
            console.log('Error: ', err);
        }
    };

    console.log('Finished writing');
}

const connectToMongo = (mongoPath) => {
    return new Promise((resolve, reject) => {
        mongoose.set('useCreateIndex', true);
        mongoose.connect(mongoPath, { useNewUrlParser: true })
            .then(() => {
                console.log('Mongo connected!');
                resolve();
            })
            .catch(err => {
                console.log(`Error: ${err}`);
                reject();
            });
    });
}

module.exports = json2mongo;