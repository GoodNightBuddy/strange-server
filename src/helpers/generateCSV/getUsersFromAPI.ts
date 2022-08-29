import axios from "axios";


export interface IUserFromAPI {
  id: number,
  email: string,
  first_name: string;
  last_name: string,
  avatar: string
}

export async function getData() {
  const url = new URL('https://reqres.in/api/users');
  const searchParam = 'page'
  const requestURLs: string[] = [];

  let pages: number;
  let users: IUserFromAPI[];
  const result = await axios.get(url.href);
  pages = result.data.total_pages;
  users = result.data.data;

  if(pages > 1) {  //we don't know the number of pages
    for(let i = 2; i <= pages; i++) {
      url.searchParams.set(searchParam, i.toString());
      requestURLs.push(url.href)
    }
  }

  const results = await Promise.allSettled(requestURLs.map(url => axios.get(url)));  
  results.forEach((result, num) => {
    if (result.status == "fulfilled") {
      users = [...users, ...result.value.data.data]
    }
    if (result.status == "rejected") {
      console.log(`${requestURLs[num]}: ${result.reason}`);
    }
  });

  return users
}