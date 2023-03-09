import { Router } from "express";
// const Router = require("express");
import productRouter from "./products/productsRoutes.js";
import userRoute from './users/userRoutes.js'
// const productRoute = require("./products/productsRoutes.js");
// const userRoute = require("./users/userRouter.js");

const router = Router();

router.use("/products", productRouter);
router.use("/user", userRoute);

export default router;
// module.exports = router;
