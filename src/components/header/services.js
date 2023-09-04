import { deezerApi } from "../../utils/config";

export default {
  /** Send a Get request to Search Artiste */
  async SearchArtiste(searchTerm) {
    return deezerApi.get(`search/artist?q=${searchTerm}`);
  },
};
