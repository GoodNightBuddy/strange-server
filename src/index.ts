import { json } from 'body-parser';
import express, { Request, Response, NextFunction } from 'express';
import axios from 'axios';
import fs from 'fs';
import path from 'path';
import { writeCSV } from './helpers/writeCSV';

const app = express();

app.use(json())


app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.end('<h1>Hello world</h1>')
});

app.get('/hello', (req: Request, res: Response, next: NextFunction) => {
  console.log(req.body)
});

app.get('/users', (req: Request, res: Response, next: NextFunction) => {
  const result = axios.get('https://reqres.in/api/users');
  result.then(info=> {

    writeCSV(info.data.data)
    // fs.writeFile(path.join(__dirname, 'message.csv'), JSON.stringify(info.data.data), (err,) => {
    // });

    
    res.status(200).send(info.data)
  });

});


const port = process.env.PORT || 3000;

app.listen(port);