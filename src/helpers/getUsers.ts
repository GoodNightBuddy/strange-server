import axios from "axios";


// url.searchParams.set('pages', '1')
// console.log(url)

//   Promise.allSettled([
//     axios.get('https://reqres.in/api/users?pages=1'),
//     axios.get('https://reqres.in/api/users?pages=2')
//   ]).then(res => console.log(res[0].value.data))

// app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
//   res.status(500).json({ message: err.message });
// });

function getData() {
  const url = new URL('https://reqres.in/api/users')

  let pages;

  axios.get('https://reqres.in/api/users').then(res => pages = res.data.total_pages)
  console.log(pages)


  return 
}