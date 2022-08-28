import { json } from 'body-parser';
import express, { Request, Response, NextFunction } from 'express';
import { writeCSV } from './helpers/generateCSV/writeCSV';
import { getData } from './helpers/generateCSV/getUsersFromAPI';
import { createUser } from './helpers/users/createUser';
import { getUsers } from './helpers/users/getUsers';
import { searchUsersByEmail } from './helpers/users/searchUsers';

const app = express();

app.use(json())


app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.end('<h1>Hello speroteck!</h1>')
});

app.get('/hello', (req: Request, res: Response, next: NextFunction) => {
  if (req.body.age > 18) {
    res.end(`Hello ${req.body.name} ${req.body.surname}!`)
  } else {
    res.end(`You are underaged!`)
  }
});

app.post('/users', async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (req.body.age > 18) {
      const { email, name, surname } = req.body;
      const response = await createUser({ email, name, surname });
      if (response.status === 200) {
        res.status(201).send('Done!')
      } else {
        throw new Error(response.statusText)
      }
    } else {
      res.end(`You are underaged!`)
    }
  } catch (error: any) {
    res.status(error.status || 500).json(error.message);
  }

});

app.get('/users', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await getUsers();
    if(req.body.email) {
      const list = searchUsersByEmail(req.body.email, users);
      res.status(200).send(list)
    } else {
      res.status(200).send(users)
    }
  } catch (error: any) {
    res.status(error.status || 500).json(error.message);
  }
});

app.get('/file', (req: Request, res: Response, next: NextFunction) => {
  getData()
    .then(users => writeCSV(users))
    .then(users => res.status(200).send(users))
    .catch(error => res.status(400).send(error.message))
});

const port = process.env.PORT || 3000;

app.listen(port);