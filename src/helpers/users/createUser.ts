import axios from "axios";

export interface IUser {
  email: string;
  name: string;
  surname: string;
}

export async function createUser({ email, name, surname }: IUser) {
  const response = await axios.post('https://react-quiz-26e10-default-rtdb.europe-west1.firebasedatabase.app/users.json', { email, name, surname })

  return response
}

export class Users {

  private url: string = 'https://react-quiz-26e10-default-rtdb.europe-west1.firebasedatabase.app/users.json'

  static async createUser({ email, name, surname }: IUser) {
    const response = await axios.post(this.url, { email, name, surname })

    return response
  }

}