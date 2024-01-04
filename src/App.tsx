import React from "react";

import styles from "./styles/app.module.scss";

import { Routes, Route } from "react-router-dom";

import { MainPage } from "./pages/MainPage";
import { NewsPage } from "./pages/NewsPage";

import { ErrorPage } from "./pages/Error";
import { useQuery } from "@tanstack/react-query";
import { getNews } from "./api/newsService";

export const App = () => {
  const { error, isError } = useQuery(["newsData"], getNews);

  console.log(error)


  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/item/:id" element={<NewsPage />} />
          <Route path="/error" element={<ErrorPage error={error}/>} />
        </Routes>
      </div>
    </div>
  );
};
