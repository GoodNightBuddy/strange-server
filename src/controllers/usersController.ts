import { Request, Response, NextFunction } from "express"
import { UsersAction } from "../helpers/db/UsersAction";
import { searchUsersByEmail } from "../helpers/other/searchUsers";

export class UserController {

  static async sayHelloIfAdult (req: Request, res: Response, next: NextFunction) {
    if (req.body.age >= 18) {
      res.end(`Hello ${req.body.name} ${req.body.surname}!`)
    } else {
      res.end(`You are underaged!`)
    }
    next();
  };

  static async saveUserIfAdult (req: Request, res: Response, next: NextFunction) {
    try {
      if (req.body.age >= 18) {
        const { email, name, surname } = req.body;
        const response = await UsersAction.createUser({ email, name, surname });
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
    next();
  };


  static async getUsersListByEmail (req: Request, res: Response, next: NextFunction) {
    try {
      const users = await UsersAction.getUsers();
      if(req.body.email) {
        const list = searchUsersByEmail(req.body.email, users);
        res.status(200).send(list)
      } else {
        res.status(200).send(users)
      }
    } catch (error: any) {
      res.status(error.status || 500).json(error.message);
    }

};

}