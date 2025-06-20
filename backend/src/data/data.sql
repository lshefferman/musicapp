CREATE TABLE IF NOT EXISTS playlists (
    id UUID PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT, 
    creator_id UUID REFERENCES users(id),
    is_public BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT NOW()
)