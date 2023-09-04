/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchedArtiste: [],
  searchedTerm: "",
  searchIsLoading: undefined,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setCurrentSearchDetails(state, action) {
      const { searchedArtiste, searchedTerm, searchIsLoading } = action.payload;

      state.searchedArtiste = searchedArtiste;
      state.searchedTerm = searchedTerm;
      state.searchIsLoading = searchIsLoading;
    },
  },
});

export const searchedArtiste = (state) => state.search.searchedArtiste;
export const searchedTerm = (state) => state.search.searchedTerm;
export const searchIsLoading = (state) => state.search.searchIsLoading;
export const { setCurrentSearchDetails } = searchSlice.actions;

export default searchSlice.reducer;
