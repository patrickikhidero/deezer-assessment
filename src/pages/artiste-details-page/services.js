import { deezerApi } from "../../utils/config";

export default {
  async GetArtisteDetails(artisteId) {
    return deezerApi.get(`artist/${artisteId}`);
  },

  async GetTopSongs(artisteId) {
    return deezerApi.get(`artist/${artisteId}/top`);
  },

  async GetAlbums(artisteId) {
    return deezerApi.get(`artist/${artisteId}/albums`);
  },
};
