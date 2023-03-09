import { PrismaClient } from "@prisma/client";
import express from "express";
// import routes from "./routes/index.js";

const prisma = new PrismaClient();
const app = express();

// app.use(express.json())

// app.use("/", routes);
// app.listen(3001, () =>
//   console.log('REST API server ready at: http://localhost:3001'),
// )

try {
  // app.listen(app.get('port'))
  app.listen(3001, () => {
    console.log("Backend server is running!");
  });
  console.log("server on port", app.get("port"));
  // connectDB()
} catch (error) {
  console.error(error);
}

export default prisma;
