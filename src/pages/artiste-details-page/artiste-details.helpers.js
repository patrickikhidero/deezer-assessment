import services from "./services";

export const getArtistesDetails = async (setArtisteDetails, artisteId) => {
  await services
    .GetArtisteDetails(artisteId)
    .then((response) => {
      if (response.status === 200) {
        setArtisteDetails(response.data);
      }
    })
    .catch((error) => {
      if (error) {
        console.log("Error", error);
      }
    });
};

export const getArtistesTopSongs = async (setArtisteTopSongs, artisteId) => {
  await services
    .GetTopSongs(artisteId)
    .then((response) => {
      if (response.status === 200) {
        setArtisteTopSongs(response.data.data);
      }
    })
    .catch((error) => {
      if (error) {
        console.log("Error", error);
      }
    });
};

export const getArtistesAlbums = async (setArtisteAlbums, artisteId) => {
  await services
    .GetAlbums(artisteId)
    .then((response) => {
      if (response.status === 200) {
        setArtisteAlbums(response.data.data);
      }
    })
    .catch((error) => {
      if (error) {
        console.log("Error", error);
      }
    });
};
