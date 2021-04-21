import express from "express";
import mime from "mime";
import { GetAllMenus, GetMenuInfo, SaveMenu, Delete } from "./controller";

const router = express.Router();

router.get("/get-all", GetAllMenus);
router.get("/get-menu-info", GetMenuInfo);
router.post("/save", SaveMenu);
router.post("/delete", Delete);

export = router;
