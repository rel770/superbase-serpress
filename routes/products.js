import { Router } from "express";
import { getProducts } from "../controllers/productsController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = Router();

// GET /products - return products data only if authenticated
router.get("/", authMiddleware, getProducts);

export default router;
