import express from "express";
import {
  deleteUser,
  getAllUser,
  getUser,
  updateUser,
} from "../controller/userController.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";
const router = express.Router();

router.get("/checkauthentication/:id", verifyToken, (req, res, next) => {
  res.send("Hello User, You are logged in!");
});

router.get("/checkuser/:id", verifyUser, (req, res, next) => {
  res.send("You can log in, and you can delete your account");
});

router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
  res.send("hello admin, you can delete anything!");
});

// update
router.put("/:id", verifyUser, updateUser);

// delete
router.delete("/:id", verifyUser, deleteUser);

// get
router.get("/find/:id", verifyUser, getUser);

// getAll
router.get("/", verifyAdmin, getAllUser);

export default router;
