// the code is not working it's just a piece of code for understandin index1.js file for the same folder

import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/submit', (req, res) => {
  console.log(req.body);
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
})
