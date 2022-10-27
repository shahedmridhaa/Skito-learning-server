const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());

const course = require("./data/course.json");
const details = require("./data/details.json");

app.get("/", (req, res) => {
  res.send("website is comming");
});

app.get('/', (req, res) =>{
  res.download()
})

app.get("/course", (req, res) => {
  res.send(course);
});

app.get("/details/:id", (req, res) => {
  const id = req.params.id;
  const selected = details.find((n) => n.d_id === id);
  res.send(selected);
});


app.get("/premium/:id", (req, res) => {
  const id = req.params.id;
  const selected = details.find((n) => n.d_id === id);
  res.send(selected);
});

app.listen(port, () => {
  console.log("Skito Learning server", port);
});
