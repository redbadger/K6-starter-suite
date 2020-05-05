const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to the homepage").status(200);
});

app.get("/courses", (req, res) => {
  setTimeout(() => { res.send("Endpoint functioning").status(200); }, 1000);
});

const hostname = "127.0.0.1";
const port = 3003;
app.listen(port, () => {
  console.log(`Serving running at http://${hostname}:${port}/`);
});

process.on('SIGTERM', () => {
  server.close(() => {
    console.log('Process terminated')
  })
})
