import { API_ENDPOINT } from '../shared/constants';

// const ENDPOINTS = (userId = null, albumId = null) => ({
//   ALL_ALBUMS_FROM_USER: `${API_ENDPOINT}/users/${userId}/albums`,
//   PHOTOS_FROM_SINGLE_ALBUM: `${API_ENDPOINT}/albums/${albumId}/photos`
// });

class AlbumService {
  fetchAlbums(userId) {
    const ALBUMS_ENDPOINT = `${API_ENDPOINT}/users/${userId}/albums`;

    return fetch(ALBUMS_ENDPOINT)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        return data;
      });
  }

  fetchPhotosFromAlbum(albumId) {
    const PHOTOS_ENDPOINT = `${API_ENDPOINT}/albums/${albumId}/photos`;

    return fetch(PHOTOS_ENDPOINT)
      .then(response => response.json())
      .then(data => {
        console.log(data);
      });
  }
}

export const albumService = new AlbumService();