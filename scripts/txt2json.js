const fs = require('fs');

const txt2json = (txtPath, jsonPath) => {
    let txt = fs.readFileSync(txtPath, 'utf8');
    txt = txt.replace(/\n/g, '');
    let txtLines = txt.split('\r');

    let json = {};
    txtLines.forEach(line => {
        const lineElements = line.split('\t');
        const word = lineElements[0];
        const freq = lineElements[3];
        if(json[word]) return;
        json[word] = freq;
    });

    // Write to file
    const outJson = JSON.stringify(json, null, 2);
    fs.writeFile(jsonPath, outJson, 'utf-8', err => {
        if(err) return console.log(err);
        console.log('Success!');
    });
}

module.exports = txt2json;