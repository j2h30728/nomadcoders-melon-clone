import express from "express";
import { registerPlaying } from "../controllers/songController";

const apiRouter = express();

apiRouter.post(`/songs/:id([0-9a-f]{24})/playing`, registerPlaying);

export default apiRouter;
