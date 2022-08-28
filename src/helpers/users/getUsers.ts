import axios from "axios";

export async function getUsers() {
  const response = await axios.get('https://react-quiz-26e10-default-rtdb.europe-west1.firebasedatabase.app/users.json')
  return response.data
}