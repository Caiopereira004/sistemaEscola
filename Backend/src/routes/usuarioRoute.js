import { Router } from "express";
import { listarUsuarios } from "../controllers/usuarioController.js";
import { verificarToken } from "../middlewares/authmiddlewares.js";

const router = Router();

router.get("/", listarUsuarios);

export default Router;