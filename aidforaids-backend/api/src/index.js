import { PrismaClient } from "@prisma/client";
import express from "express";
import routes from './routes/index.js'
// const routes = require("./routes/index.js");

const prisma = new PrismaClient();
const app = express();

// app.use(express.json())

// app.use("/", routes);

try {
  // app.listen(app.get('port'))
  app.listen(3001, () => {
    console.log("Backend server is running!");
  });
  console.log("server on port", app.get("port"));
} catch (error) {
  console.error(error);
}

export default prisma;
