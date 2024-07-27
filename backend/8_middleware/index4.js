import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html")
})

app.post("/submit", (req, res) => {
  const street = req.body["street"]
  const pet = req.body["pet"]
  const bandName = `${street}${pet}`;
  res.send(`<h2> Your band name is:</h2> <h3>${bandName}🎸</h3>`)
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});


/*
* const bandName = `${req.body["street"]} ${req.body["pet"]}`
* we can generate bandName in the also the same way
*/