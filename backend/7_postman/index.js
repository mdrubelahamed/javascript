import express from "express";

// create a server using express
const app = express();
const port = 3000;


// .routes which we use to get status code here below. we use .get, .post, .put, .patch, .delete routes
// req => request, res => response
app.get('/', (req, res) => {
  res.send('<h1>Home Page</h1>')
});

app.post('/register', (req, res) => {
  res.sendStatus(201);
});

app.put('/user/rubel', (req, res) => {
  res.sendStatus(200);
});

app.patch('/user/rubel', (req, res) => {
  res.sendStatus(200);
});

app.delete('/user/rubel', (req, res) => {
  res.sendStatus(200);
});


app.listen(port, () => {
  console.log(`Server started on port ${port}`);
})