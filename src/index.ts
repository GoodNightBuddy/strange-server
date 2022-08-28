import { json } from 'body-parser';
import express, { Request, Response, NextFunction } from 'express';
import { writeCSV } from './helpers/generateCSV/writeCSV';
import { getData } from './helpers/generateCSV/getUsersFromAPI';
import { UserController } from './controllers/usersController';

const app = express();

app.use(json())


app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.end('<h1>Hello speroteck!</h1>')
});

app.get('/hello', UserController.sayHelloIfAdult);

app.post('/users', UserController.saveUserIfAdult);

app.get('/users', UserController.getUsersListByEmail);

app.get('/file', (req: Request, res: Response, next: NextFunction) => {
  getData()
    .then(users => writeCSV(users))
    .then(users => res.status(200).send(users))
    .catch(error => res.status(400).send(error.message))
});

const port = process.env.PORT || 3000;

app.listen(port);