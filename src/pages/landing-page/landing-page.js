import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import ArtisteCard from "../../components/cards/artistes-card";
import {
  searchedArtiste,
  searchedTerm,
  searchIsLoading,
} from "../../redux/search/searchSlice";
import Header from "../../components/header/header";

function LandingPage() {
  const isSearchedArtiste = useSelector(searchedArtiste);
  const isSearchedTerm = useSelector(searchedTerm);
  const isSearchIsLoading = useSelector(searchIsLoading);

  useEffect(() => {
    const ac = new AbortController();

    document.title = "Deezer • Search";

    return function cleanup() {
      ac.abort();
    };
  }, []);

  /** Display Fetched Artiste Cards */
  const displayFetchedArtisteCards = () => {
    return isSearchedArtiste?.map((fetchedArtistes) => (
      <div key={fetchedArtistes.id}>
        <ArtisteCard className="zoom-in" fetchedArtistes={fetchedArtistes} />
      </div>
    ));
  };

  return (
    <div>
      <Header />
      <section className=" px-[16px] md:px-[60px] lg:px-[60px]">
        <p className="text-3xl md:text-4xl lg:text-5xl my-6 text-center font-MabryProBold">
          {isSearchedTerm ? `Searching ${isSearchedTerm} ` : "Search Artiste"}
        </p>

        {isSearchIsLoading === true ? (
          <div className="pt-60 flex items-center justify-center">
            <p className="text-lg md:text-xl lg:text-2xl text-center font-MabryProMedium">
              Searching...
            </p>
          </div>
        ) : isSearchIsLoading === false ? (
          <span />
        ) : (
          <div className="pt-60 flex items-center justify-center">
            <p className="ext-lg md:text-xl lg:text-2xl text-center font-MabryProBold">
              Use this box to enter a search
            </p>
          </div>
        )}

        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full place-items-center mb-6 mt-10">
          {displayFetchedArtisteCards()}
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
