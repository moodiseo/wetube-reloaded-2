import express from "express";
import { trendig } from "../controllers/videoController";
import { join } from "../controllers/userController";

const globalRouter = express.Router();

globalRouter.get("/", trendig);
globalRouter.get("/join", join);

export default globalRouter;
