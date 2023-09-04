import { deezerApi } from "../../utils/config";

export default {
  async searchArtiste(searchTerm) {
    return deezerApi.post(`earch?q=${searchTerm}`);
  },
};
