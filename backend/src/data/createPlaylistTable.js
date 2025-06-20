import pool from "../config/db.js";

const createPlaylistTable = async () => {
  const queryText = `    
    id UUID PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT, 
    creator_id UUID REFERENCES users(id),
    is_public BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT NOW()`;

  try {
    pool.query(queryText);
    console.log("playlist table created if it doesn't exist");
  } catch (error) {
    console.log("error creating playlist table: ", error);
  }
};

export default createPlaylistTable;
