import express from "express";

const app = express();
const port = 3000;

// logger middleware create by own 
// * it's just a function
function logger(req, rest, next) {
  console.log(`Request Method ${req.method}`);
  console.log(`Request url ${req.url}`);
  // console.log(`Route Parameters: ${req.params}`);
  // console.log(`Query Parameters: ${req.query}`);
  // console.log(`Request Headers: ${req.headers}`);
  // console.log(`Client IP Address: ${req.ip}`);
  // console.log(`Request Path: ${req.path}`);
  // console.log(`Request Protocol: ${req.protocol}`);
  next();
}

app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello Rubel");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

