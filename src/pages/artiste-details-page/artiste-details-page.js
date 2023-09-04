import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SongsCard from "../../components/cards/songs-card";
import BarnnerCard from "../../components/cards/barnner-card";
import Header from "../../components/header/header";
import { useWindowResize } from "../../helpers/useWindowResize";
import {
  getArtistesAlbums,
  getArtistesDetails,
  getArtistesTopSongs,
} from "./artiste-details.helpers";
import AlbumCard from "../../components/cards/album-card";

function ArtisteDetailsPage() {
  const params = useParams();
  // const { artisteName } = params;
  const { artisteId } = params;
  const { width } = useWindowResize();
  const [artisteDetails, setArtisteDetails] = useState([]);
  const [artisteTopSongs, setArtisteTopSongs] = useState([]);
  const [artisteAlbums, setArtisteAlbums] = useState([]);

  useEffect(() => {
    const ac = new AbortController();

    document.title = "Deezer • Artiste Details";

    getArtistesDetails(setArtisteDetails, artisteId);
    getArtistesTopSongs(setArtisteTopSongs, artisteId);
    getArtistesAlbums(setArtisteAlbums, artisteId);

    return function cleanup() {
      ac.abort();
    };
  }, []);

  const displayFetchedAlbumCards = () => {
    return artisteAlbums?.map((fetchedAlbum) => (
      <div key={fetchedAlbum.id}>
        <AlbumCard fetchedAlbum={fetchedAlbum} />
      </div>
    ));
  };

  return (
    <div>
      <Header />
      <section className="w-full px-[16px] md:px-[60px] lg:px-[60px]">
        <div className={`${width > 1060 && "lg:flex"} items-center`}>
          <div className={`${width < 1060 ? "w-full" : "lg:w-4/5"}`}>
            <BarnnerCard artisteDetails={artisteDetails} />
          </div>
          <div className={`${width < 1060 ? "w-full" : "lg:w-1/5 lg:mt-0"}`}>
            <SongsCard artisteTopSongs={artisteTopSongs} />
          </div>
        </div>

        <div className="mt-10">
          <p className="font-MabryProBold mb-4 text-deezer-font-black text-4xl">
            Albums
          </p>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full place-items-center mb-10 mt-6">
            {displayFetchedAlbumCards()}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ArtisteDetailsPage;
