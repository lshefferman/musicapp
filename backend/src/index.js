import express from "express";
import cors from "cors";
import pool from "./config/db.js";
import dotenv from "dotenv";

import playlistRoutes from "./routes/playlistRoutes.js";
import errorHandling from "./middleware/errorHandler.js";
import createPlaylistTable from "./data/createPlaylistTable.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3500;

// middleware
app.use(express.json());
app.use(cors());

// routes
app.use("/api/playlists", playlistRoutes);

// error handling
app.use(errorHandling);

// Create table before starting server
createPlaylistTable();

// Testing postgres db connection
app.get("/", async (req, res) => {
  const result = await pool.query("SELECT current_database()");
  res.send(`The database name is: ${result.rows[0].current_database}`);
});

// server running
app.listen(port, () => {
  console.log("Server is listenng on port", port);
});
