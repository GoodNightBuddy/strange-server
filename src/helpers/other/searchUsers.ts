export function searchUsersByEmail(email: string, users: any): string[] {

  const result: string[] = [];

  for (let key in users) {
    if (users[key].email === email) {
      result.push(users[key].name + ' ' + users[key].surname)
    }
  }

  return result
}