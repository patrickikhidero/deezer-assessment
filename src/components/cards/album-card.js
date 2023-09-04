/* eslint-disable react/destructuring-assignment */
import React from "react";
import { useWindowResize } from "../../helpers/useWindowResize";

function AlbumCard({ fetchedAlbum }) {
  const { width } = useWindowResize();

  function SplitDate(date) {
    const year = date.split("-");
    return year[0];
  }

  return (
    <div>
      {width > 1060 ? (
        <div title={fetchedAlbum.title} className="cursor-pointer   ">
          <img
            src={fetchedAlbum.cover_medium}
            alt={fetchedAlbum.title}
            className="object-cover rounded-lg
            h-[300px] w-[300px] hover:h-[310px] hover:w-[310px] hover:shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-10 duration-300"
          />
          <p className="font-MabryProBold mt-4 text-deezer-font-black text-xl">
            {fetchedAlbum.title.length <= 25 ? (
              <span>{fetchedAlbum.title}</span>
            ) : (
              <span>{fetchedAlbum.title.slice(0, 25)}...</span>
            )}
          </p>
          <p className="font-MabryProMedium text-deezer-font-black text-lg">
            {SplitDate(fetchedAlbum.release_date)}
          </p>
        </div>
      ) : (
        <div title={fetchedAlbum.title} className="cursor-pointer  ">
          <img
            src={fetchedAlbum.cover_medium}
            alt={fetchedAlbum.title}
            className="object-cover rounded-lg
              h-[300px] w-[300px] hover:h-[310px] hover:w-[310px] hover:shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-10 duration-300 "
          />
          <p className="font-MabryProBold mt-2 text-deezer-font-black text-xl">
            {fetchedAlbum.title.length <= 25 ? (
              <span>{fetchedAlbum.title}</span>
            ) : (
              <span>{fetchedAlbum.title.slice(0, 25)}...</span>
            )}
          </p>
          <p className="font-MabryProMedium text-deezer-font-black text-lg">
            {SplitDate(fetchedAlbum.release_date)}
          </p>
        </div>
      )}
    </div>
  );
}

export default AlbumCard;
