const routes = (handler) => [
  {
    method: 'POST',
    path: '/playlists',
    handler: handler.postPlaylistHandler,
    options: {
      auth: 'openmusic_jwt',
    },
  },
  {
    method: 'GET',
    path: '/playlists',
    handler: handler.getPlaylistsHandler,
    options: {
      auth: 'openmusic_jwt',
    },
  },
  // {
  //   method: 'GET',
  //   path: '/playlists/{id}',
  //   handler: handler.getPlaylistByIdHandler,
  // },
  // {
  //   method: 'PUT',
  //   path: '/playlists/{id}',
  //   handler: handler.putPlaylistByIdHandler,
  // },
  // {
  //   method: 'DELETE',
  //   path: '/playlists/{id}',
  //   handler: handler.deletePlaylistByIdHandler,
  // },
];
module.exports = routes;
