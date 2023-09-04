import services from "./services";

/** Handles Search Artiste's */
export const handleOnChangeSearchArtistes = async (
  searchTerm,
  dispatch,
  setCurrentSearchDetails,
) => {
  // console.log("search text", searchTerm);
  dispatch(
    setCurrentSearchDetails({
      searchIsLoading: true,
    }),
  );
  await services
    .SearchArtiste(searchTerm)
    .then((response) => {
      if (response.status === 200) {
        // console.log("search artiste response", response.data.data);
        dispatch(
          setCurrentSearchDetails({
            searchedArtiste: response.data.data,
            searchedTerm: searchTerm,
            searchIsLoading: false,
          }),
        );
      }
    })
    .catch((error) => {
      if (error) {
        // console.error("Search ERROR", error);
      }
    });
};
