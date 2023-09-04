/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
import React from "react";
import { useWindowResize } from "../../helpers/useWindowResize";

function SongsCard({ artisteTopSongs }) {
  const { width } = useWindowResize();

  /** Format Seconds to M:SS */
  function FomartSecondsToMinutes(seconds) {
    return (
      (seconds - (seconds %= 60)) / 60 + (seconds > 9 ? ":" : ":0") + seconds
    );
  }

  /** Display Fetched Top Songs Desktop */
  const displayFetchedTopSongsDesktop = () => {
    return artisteTopSongs?.map((fetchedTopSongs) => (
      <div
        title={fetchedTopSongs.title}
        key={fetchedTopSongs.id}
        className="h-full px-4 mt-2 flex items-center justify-between cursor-pointer rounded-lg text-deezer-font-white hover:text-deezer-font-black  border-black border-b bg-deezer-orange hover:bg-white"
      >
        <p className="font-MabryProMedium text-base">
          {fetchedTopSongs.title.length <= 18 ? (
            <span>{fetchedTopSongs.title}</span>
          ) : (
            <span>{fetchedTopSongs.title.slice(0, 18)}...</span>
          )}
        </p>
        <p className="font-MabryProMedium text-base">
          {FomartSecondsToMinutes(fetchedTopSongs.duration)}
        </p>
      </div>
    ));
  };

  /** Display Fetched Top Songs Mobile */
  const displayFetchedTopSongsMobile = () => {
    return artisteTopSongs?.map((fetchedTopSongs) => (
      <div
        title={fetchedTopSongs.title}
        key={fetchedTopSongs.id}
        className="h-full px-4 mt-2 flex items-center justify-between cursor-pointer rounded-lg text-deezer-font-white hover:text-deezer-font-black  border-black border-b bg-deezer-orange hover:bg-white"
      >
        <p className="font-MabryProMedium text-base">
          {fetchedTopSongs.title.length <= 25 ? (
            <span>{fetchedTopSongs.title}</span>
          ) : (
            <span>{fetchedTopSongs.title.slice(0, 25)}...</span>
          )}
        </p>
        <p className="font-MabryProMedium text-base">
          {FomartSecondsToMinutes(fetchedTopSongs.duration)}
        </p>
      </div>
    ));
  };

  return (
    <div>
      {width > 1060 ? (
        <div className="h-[500px] flex flex-col justify-evenly border border-black rounded-r-lg px-4 py-6">
          <p className="font-MabryProBold mb-4 text-deezer-font-black text-4xl">
            Top Songs
          </p>
          {displayFetchedTopSongsDesktop()}
        </div>
      ) : (
        <div className="h-[500px] mt-12 flex flex-col justify-evenly border border-black rounded-lg px-4 py-6">
          <p className="font-MabryProBold mb-4 text-deezer-font-black text-3xl">
            Top Songs
          </p>
          {displayFetchedTopSongsMobile()}
        </div>
      )}
    </div>
  );
}

export default SongsCard;
