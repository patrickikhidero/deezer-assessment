/* eslint-disable react/destructuring-assignment */
import React from "react";
import { useNavigate } from "react-router-dom";
import { NonAuthRoutes } from "../../utils/urls";
import { useWindowResize } from "../../helpers/useWindowResize";
import { ReactComponent as PlayIcon } from "../../assets/svg/landing-page/play-icon.svg";

function ArtisteseCard({ fetchedArtistes }) {
  const { width } = useWindowResize();
  const navigate = useNavigate();

  /** Number Formatter */
  function NumberFormatter(num) {
    if (num >= 1000000000) {
      return `${(num / 1000000000).toFixed(1).replace(/\.0$/, "")}G`;
    }
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1).replace(/\.0$/, "")}M`;
    }
    if (num >= 1000) {
      return `${(num / 1000).toFixed(1).replace(/\.0$/, "")}K`;
    }
    return num;
  }

  /** Artistes Card Desktop Reusable Component */
  function ArtistesCardDesktop({ id, image, artistesName, fans, album }) {
    return (
      <button
        type="button"
        onClick={() =>
          navigate(`${NonAuthRoutes.artisteDetailsPage}/${artistesName}/${id}`)
        }
        title={`Play ${artistesName}`}
        className="w-[367.73px] cursor-pointer text-left 
        hover:w-[377.73px] hover:shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-10  duration-300 
        "
      >
        <div className="overflow-hidden">
          <img
            src={image}
            alt={artistesName}
            className="object-cover h-[406.1px] rounded-t-lg hover:h-[416.1px]"
          />
        </div>
        <div className="flex items-center justify-between py-[8px] px-2 rounded-b-lg bg-deezer-orange ">
          <div className="">
            <p className="text-3xl text-deezer-font-white font-MabryProBold">
              {artistesName.length <= 18 ? (
                <span>{artistesName}</span>
              ) : (
                <span>{artistesName.slice(0, 18)}...</span>
              )}
            </p>
            <p className="text-lg text-deezer-font-white font-MabryProMedium">
              {NumberFormatter(fans)} Fans
            </p>
            {width > 1060 && (
              <p className="text-base text-deezer-font-white font-MabryProBold">
                {NumberFormatter(album)} Albums
              </p>
            )}
          </div>
          <div>
            <PlayIcon title="Play" />
          </div>
        </div>
      </button>
    );
  }

  /** Artistes Card Mobile Reusable Component */
  function ArtistesCardMobile({ id, image, artistesName, fans, album }) {
    return (
      <button
        type="button"
        onClick={() =>
          navigate(`${NonAuthRoutes.artisteDetailsPage}/${artistesName}/${id}`)
        }
        title={`Play ${artistesName}`}
        className="w-[330px] cursor-pointer text-left"
      >
        <div className="overflow-hidden">
          <img
            src={image}
            alt={artistesName}
            className="object-cover h-[358px] rounded-t-lg"
          />
        </div>
        <div className="flex items-center justify-between py-[8px] px-2 rounded-b-lg bg-deezer-orange ">
          <div className="">
            <p className="text-3xl text-deezer-font-white font-MabryProBold">
              {artistesName.length <= 18 ? (
                <span>{artistesName}</span>
              ) : (
                <span>{artistesName.slice(0, 18)}...</span>
              )}
            </p>
            <p className="text-lg text-deezer-font-white font-MabryProMedium">
              {NumberFormatter(fans)} Fans
            </p>
            {width > 1060 && (
              <p className="text-base text-deezer-font-white font-MabryProBold">
                {NumberFormatter(album)} Albums
              </p>
            )}
          </div>
          <div>
            <PlayIcon title="Play" />
          </div>
        </div>
      </button>
    );
  }

  return (
    <div>
      {width > 1060 ? (
        <ArtistesCardDesktop
          id={fetchedArtistes.id}
          image={fetchedArtistes.picture_xl}
          artistesName={fetchedArtistes.name}
          fans={fetchedArtistes.nb_fan}
          album={fetchedArtistes.nb_album}
        />
      ) : (
        <ArtistesCardMobile
          id={fetchedArtistes.id}
          image={fetchedArtistes.picture_xl}
          artistesName={fetchedArtistes.name}
          fans={fetchedArtistes.nb_fan}
          album={fetchedArtistes.nb_album}
        />
      )}
    </div>
  );
}

export default ArtisteseCard;
