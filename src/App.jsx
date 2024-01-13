import React from "react";
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


import HomePage from "./pages/Home";
import ShowerThoughtsPage from "./pages/ShowerThoughts";
import TechPage from "./pages/Tech";
import PoemsPage from "./pages/Poems";
import JokesPage from "./pages/Jokes";
import AboutPage from "./pages/About";
import MainNavigation from "./components/layout/MainNavigation";
import NotFoundPage from "./pages/NotFound";

const App = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <MainNavigation />
              <HomePage />
            </>
          }
        />
        <Route
          path="/home"
          element={
            <>
              <MainNavigation />
              <HomePage />
            </>
          }
        />
        <Route
          path="/shower-thoughts"
          element={
            <>
              <MainNavigation />
              <ShowerThoughtsPage />
            </>
          }
        />
        <Route
          path="/tech"
          element={
            <>
              <MainNavigation />
              <TechPage />
            </>
          }
        />
        <Route
          path="/poems"
          element={
            <>
              <MainNavigation />
              <PoemsPage />
            </>
          }
        />
        <Route
          path="/jokes"
          element={
            <>
              <MainNavigation />
              <JokesPage />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <MainNavigation />
              <AboutPage />
            </>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;
