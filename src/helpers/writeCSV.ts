const createCsvWriter = require('csv-writer').createObjectCsvWriter;
import path from 'path';

export function writeCSV (data: string[]) {
  const csvWriter = createCsvWriter({
    path: path.join(__dirname, 'message.csv'),
    header: [
        {id: 'id', title: 'ID'},
        {id: 'email', title: 'Email'},
        {id: 'first_name', title: 'First name'},
        {id: 'last_name', title: 'Last name'},
    ]
  });
  
  csvWriter.writeRecords(data)       // returns a promise
    .then(() => {
        console.log('...Done');
    });
};

