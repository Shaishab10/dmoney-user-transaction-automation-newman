const newman = require('newman');
 
newman.run({
    //collection: require('./collection/dmoney.json'),
    collection:'https://api.postman.com/collections/27913050-17f0af0c-d4f4-4f64-99a4-f51fcb7533a8?access_key=PMAT-01H8K8X1AEXAA3Z5KCFYDHJS0T',
    //environment:require('./collection/env.json'),
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html', // If not specified, the file will be written to `newman/` in the current working directory.
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});