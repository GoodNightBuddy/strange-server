const createCsvWriter = require('csv-writer').createObjectCsvWriter;
import path from 'path';
import { IUserFromAPI } from './getUsersFromAPI';

export function writeCSV(users: IUserFromAPI[]) {
  const csvWriter = createCsvWriter({
    path: path.join(__dirname, '../../users.csv'),
    header: [
      { id: 'id', title: 'ID' },
      { id: 'email', title: 'Email' },
      { id: 'first_name', title: 'First name' },
      { id: 'last_name', title: 'Last name' },
    ]
  });

  csvWriter.writeRecords(users)
    .then(() => {
      // console.log('...Done');
    });

    return users
};

