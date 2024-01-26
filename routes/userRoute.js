import express from "express";
import { create, deleteUser, fetch, update } from "../controllers/userController";

const route = express.Router();

route.get("/fetch",fetch)
route.post("/create",create)
route.put("/update/:id",update)
route.delete("/delete/:id",deleteUser)

export default route;