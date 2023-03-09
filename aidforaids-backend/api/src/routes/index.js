// import { Router } from "express";
const Router = require("express");
import productRoute from "./productsRoutes.js";
import userRoute from "./usersRoutes";

const router = Router();

router.use("/products", productRoute);
router.use("/user", userRoute);

// export default router;
module.exports = router;
