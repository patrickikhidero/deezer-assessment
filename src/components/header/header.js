import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  searchedTerm,
  setCurrentSearchDetails,
} from "../../redux/search/searchSlice";
import { NonAuthRoutes } from "../../utils/urls";
import { useWindowResize } from "../../helpers/useWindowResize";
import DeezerLogo from "../../assets/img/header/deezer-logo.png";
import { ReactComponent as SearchIcon } from "../../assets/svg/header/search-icon.svg";
import Inputs from "../inputs/inputs";
import Buttons from "../buttons/buttons";
import { handleOnChangeSearchArtistes } from "./header.helpers";

function Header() {
  const { width } = useWindowResize();
  const isSearchedTerm = useSelector(searchedTerm);
  const [searchTerm, setSearchTerm] = useState(isSearchedTerm || "");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  /** Displays Header Desktop */
  const headerDesktop = () => {
    return (
      <div className="w-screen h-[79px] flex items-center justify-between mb-4 px-[60px] border-b-[1px] border-deezer-light-grey">
        <button
          type="button"
          onClick={() => navigate(NonAuthRoutes.landingPage)}
        >
          <img
            src={DeezerLogo}
            alt="Deezer Logo"
            className="w-[117px] h-[26.36px] mr-12"
          />
        </button>

        <div className="w-full">
          <Inputs
            label="search"
            type="text"
            icon={
              <SearchIcon className="absolute mt-[10px] ml-[15px] w-[20px] h-[20px]" />
            }
            button={
              <Buttons
                buttonTitle="Search"
                buttonText="Search"
                buttonClick={() =>
                  handleOnChangeSearchArtistes(
                    searchTerm,
                    dispatch,
                    setCurrentSearchDetails,
                  )
                }
                buttonStyling="absolute right-[65.5px] mt-[-35px] bg-deezer-orange w-[86px] h-[30px] font-MabryProMedium text-[14px] leading-[16.36px] rounded text-center text-deezer-font-white hover:text-deezer-font-black  border-black border-b bg-deezer-orange hover:bg-white"
              />
            }
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleOnChangeSearchArtistes(
                  searchTerm,
                  dispatch,
                  setCurrentSearchDetails,
                );
              }
            }}
            styling="text-[16.46px] w-full h-[40px] pl-12 pr-14 flex items-center justify-between border-[1px] border-black rounded text-deezer-font-black placeholder-deezer-font-grey "
          />
        </div>
      </div>
    );
  };

  /** Displays Header Mobile */
  const headerMobile = () => {
    return (
      <div className="w-screen h-[46px] flex items-center justify-between mb-4 px-[16px] md:px-[60px] border-b-[0.5px] border-deezer-light-grey">
        <button
          type="button"
          onClick={() => navigate(NonAuthRoutes.landingPage)}
        >
          <img
            src={DeezerLogo}
            alt="Deezer Logo"
            className="w-[90px] h-[20.27px]"
          />
        </button>
        <div className="">
          <Inputs
            label="search"
            type="text"
            icon={
              <SearchIcon className="absolute mt-[5px] ml-[10px] w-[20px] h-[20px]" />
            }
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleOnChangeSearchArtistes(
                  searchTerm,
                  dispatch,
                  setCurrentSearchDetails,
                );
              }
            }}
            styling="text-[16.46px] w-[110px] md:w-full h-[30px] pl-10 pr-2 flex items-center justify-center border-[1px] rounded border-black text-deezer-font-black placeholder-deezer-font-grey"
          />
        </div>
      </div>
    );
  };

  return (
    <div className="sticky top-0 z-30 bg-deezer-background-white">
      {width > 1060 ? <>{headerDesktop()}</> : <>{headerMobile()}</>}
    </div>
  );
}

export default Header;
