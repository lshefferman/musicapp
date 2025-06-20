import pool from "../config/db.js";

export const getPlaylistsService = async () => {
  const result = await pool.query("SELECT * FROM playlists");
  return result.rows;
};

export const getPlaylistByIdService = async (id) => {
  const result = await pool.query("SELECT * FROM playlists where id = $1", [
    id,
  ]);
  return result.rows[0];
};

// users model - change to playlist
export const createPlaylistService = async (name, email) => {
  const result = await pool.query(
    "INSERT INTO playlists (name, email) VALUES ($1, $2) RETURNING * ",
    [name, email]
  );
  return result.rows;
};

export const editPlaylistService = async (id) => {
  const result = await pool.query(
    "UPDATE playlists SET name=$1, email=$2 WHERE id=$3 RETURNING *",
    [id, name, email]
  );
  return result.rows[0];
};

export const deletePlaylistService = async (id) => {
  const result = await pool.query(
    "DELETE FROM playlists WHERE id=$1 RETURNING *",
    [id]
  );
  return result.rows[0];
};
