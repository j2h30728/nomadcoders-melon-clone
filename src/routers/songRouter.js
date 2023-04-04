import express from "express";
import { getUpload, postUpload, watch } from "../controllers/songController";

const songRouter = express.Router();

songRouter.route("/upload").get(getUpload).post(postUpload);

export default songRouter;
