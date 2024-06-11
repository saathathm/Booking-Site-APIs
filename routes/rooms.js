import express from "express";
import { verifyAdmin } from "../utils/verifyToken.js";
import {
  createRoom,
  deleteRoom,
  getAllRoom,
  getRoom,
  updateRoom,
} from "../controller/roomController.js";
const router = express.Router();

// create
router.post("/:id", verifyAdmin, createRoom);

// update
router.put("/:id", verifyAdmin, updateRoom);

// delete
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);

// get
router.get("/find/:id", getRoom);

// getAll
router.get("/", getAllRoom);

export default router;
