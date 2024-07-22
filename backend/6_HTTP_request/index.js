import express from "express";
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Home Page')
})

app.get('/about', (req, res) => {
  res.send(`<h1>About Me</h1>`)
})

app.get('/contact', (req, res) => {
  res.send(`
    <h1>Contact</h1>
    <a href="https://www.twitter.com/rubelverse">Twitter</a>
    `)
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})