import React from "react";
import { useParams } from "react-router-dom";
import { useWindowResize } from "../../helpers/useWindowResize";

function BarnnerCard({ artisteDetails }) {
  const params = useParams();
  const { artisteName } = params;
  const { width } = useWindowResize();

  // Number Formatter
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

  /** Banner Card Desktop Reusable Component */
  function BannerCardDesktop() {
    return (
      <div className=" overflow-hidden relative">
        <div className="z-10 absolute mt-12 ml-12">
          <div>
            <h1 className="font-MabryProBold text-deezer-font-white text-8xl shadow-deezer-orange text-stroke">
              {artisteName}
            </h1>
            <h3 className="font-MabryProMedium text-deezer-font-white text-4xl shadow-deezer-orange text-stroke">
              {NumberFormatter(artisteDetails.nb_fan)} Fans
            </h3>
          </div>
        </div>
        <img
          src={artisteDetails.picture_xl}
          alt={artisteName}
          className="object-cover w-full h-[500px] rounded-l-lg"
        />
      </div>
    );
  }

  /** Banner Card Mobile Reusable Component */
  function BannerCardMobile() {
    return (
      <div className="overflow-hidden relative">
        <div className="z-10 absolute bottom-10 ml-6">
          <div>
            <h1 className="font-MabryProBold text-deezer-font-white text-4xl md:text-6xl lg:text-8xl text-stroke ">
              {artisteName}
            </h1>
            <h3 className="font-MabryProMedium text-deezer-font-white text-2xl md:text-2xl lg:text-4xl text-stroke ">
              {NumberFormatter(artisteDetails.nb_fan)} Fans
            </h3>
          </div>
        </div>
        <img
          src={artisteDetails.picture_xl}
          alt={artisteName}
          className="object-cover w-full h-[500px] rounded-lg"
        />
      </div>
    );
  }

  return (
    <div>{width > 1060 ? <BannerCardDesktop /> : <BannerCardMobile />}</div>
  );
}

export default BarnnerCard;
