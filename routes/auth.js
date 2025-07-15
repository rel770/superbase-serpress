import { Router } from "express";
import { loginUser } from "../controllers/authController.js";

const router = Router();

// POST /login - authenticate user with Supabase
router.post("/login", loginUser);

export default router;