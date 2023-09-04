import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { NonAuthRoutes } from "./urls";
import DeezerLogo from "../assets/img/header/deezer-icon.png";
import LandingPage from "../pages/landing-page/landing-page";

const ArtisteDetailsPage = React.lazy(
  () => import("../pages/artiste-details-page/artiste-details-page"),
);

function Routers() {
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center h-screen">
          <img src={DeezerLogo} alt="icon" />
          <p>Loading...</p>
        </div>
      }
    >
      <Routes>
        <Route
          exact
          path={NonAuthRoutes.landingPage}
          element={<LandingPage />}
        />
        <Route
          path={`${NonAuthRoutes.artisteDetailsPage}/:artisteName/:artisteId`}
          element={<ArtisteDetailsPage />}
        />
      </Routes>
    </Suspense>
  );
}
export default Routers;
