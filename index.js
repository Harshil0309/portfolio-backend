const express = require("express");
require("dotenv").config();
const InitiateMongoServer = require("./configs/db.config");
const bodyParser = require("body-parser");
const PORT = process.env.PORT;

const BlogRoutes = require("./routes/blogs.routes");
const CategoryRoutes = require("./routes/category.routes");
const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

app.use("/api/blogs", BlogRoutes);
app.use("/api/category", CategoryRoutes);


InitiateMongoServer()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server started at port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
