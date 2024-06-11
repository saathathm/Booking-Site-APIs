import express from "express";
import {
  countByCity,
  countByType,
  createHotel,
  deleteHotel,
  getAllHotel,
  getHotel,
  updateHotel,
} from "../controller/hotelController.js";
import { verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();

// create
router.post("/", verifyAdmin, createHotel);

// update
router.put("/:id", verifyAdmin, updateHotel);

// delete
router.delete("/:id", verifyAdmin, deleteHotel);

// get
router.get("/find/:id", getHotel);

// getAll
router.get("/", getAllHotel);

//getCountByCity
router.get("/countByCity", countByCity);

//getCountByType
router.get("/countByType", countByType);

export default router;
