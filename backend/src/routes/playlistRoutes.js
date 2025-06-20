import express from "express";
import {
  getPlaylists,
  getPlaylist,
  createPlaylist,
  deletePlaylist,
  editPlaylist,
} from "../controllers/playlistController.js";
import validatePlaylist from "../middleware/inputValidator.js";

const router = express.Router();

// GET all playlists
router.get("/", getPlaylists);

// GET a single playlist
router.get("/:id", getPlaylist);

// POST a new playlist
router.post("/", validatePlaylist, createPlaylist);

// DELETE a playlist
router.delete("/:id", deletePlaylist);

// EDIT a playlist
router.patch("/:id", validatePlaylist, editPlaylist);

export default router;
