import React from "react";

import styles from "./styles/app.module.scss";
import { Routes, Route } from "react-router-dom";

import { MainPage } from "./pages/MainPage";
import { NewsPage } from "./pages/NewsPage";
import { Header } from "./components/header";

export const App = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <MainPage />
              </>
            }
          />
          <Route path="/item/:id" element={<NewsPage />} />
        </Routes>
      </div>
    </div>
  );
};
