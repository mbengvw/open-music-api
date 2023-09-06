/* eslint-disable camelcase */

exports.up = (pgm) => {
  pgm.createTable('songs', {
    id: {
      type: 'VARCHAR(50)',
      primaryKey: true,
    },
    title: {
      type: 'VARCHAR(100)',
      notNull: true,
    },
    year: {
      type: 'INTEGER',
      notNull: true,
    },
    genre: {
      type: 'varchar(50)',
      notNull: true,
    },
    performer: {
      type: 'varchar(50)',
      notNull: true,
    },
    duration: {
      type: 'INTEGER',
    },
    albumId: {
      type: 'varchar(50)',
    },
    created_at: {
      type: 'varchar(50)',
      notNull: true,
    },
    updated_at: {
      type: 'varchar(50)',
      notNull: true,
    },
  });
};

exports.down = (pgm) => {
  pgm.dropTable('songs');
};
