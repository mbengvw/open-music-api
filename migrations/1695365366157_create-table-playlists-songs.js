exports.up = (pgm) => {
  pgm.createTable('playlists_songs', {
    id: {
      type: 'VARCHAR(50)',
      primaryKey: true,
    },
    playlist_id: {
      type: 'VARCHAR(50)',
      notNull: true,
    },
    song_id: {
      type: 'VARCHAR(50)',
      notNull: true,
    },
  });

  pgm.addConstraint(
    'playlists_songs',
    'unique_playlist_id_and_song_id',
    'UNIQUE(playlist_id, song_id)',
  );
  pgm.addConstraint(
    'playlists_songs',
    'fk_playlist_songs.playlist_id_playlists.id',
    'FOREIGN KEY(playlist_id) REFERENCES playlists(id) ON DELETE CASCADE',
  );
  pgm.addConstraint(
    'playlists_songs',
    'fk_playlist_songs.song_id_songs.id',
    'FOREIGN KEY(song_id) REFERENCES songs(id) ON DELETE CASCADE',
  );
};

exports.down = (pgm) => {
  pgm.dropTable('playlist_songs');
};
