import { IUser } from "./createUser";

type Key = string

type Users = {
  string: IUser;
}

export function searchUsersByEmail(email: string, users: Users): string[] {



  const result: string[] = [];

  for (let key in users) {
    if (users[key].email === email) {
      result.push(users[key].name + ' ' + users[key].surname)
    }
  }
  console.log(users);

  return result
}