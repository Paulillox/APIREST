import { Router } from "express";
import { infoUser, login, register, refreshToken } from "../controllers/auth.controllers.js";
import { requireToken } from "../middlewares/requireToken.js";

const router = Router();

router.post("/register", register);
router.post("/login", login);

router.get("/protected", requireToken, infoUser);
router.get("/refresh", refreshToken);

export default router;