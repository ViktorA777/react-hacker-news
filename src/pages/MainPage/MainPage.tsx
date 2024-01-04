import styles from "./mainPage.module.scss";
import { ItemNews } from "../../components/ItemNews";
import { Spinner } from "../../components/Spinner";

import { useQuery } from "@tanstack/react-query";
import { getNews } from "../../api/newsService";
import { Header } from "../../components/header";
import { Navigate } from "react-router-dom";

export const MainPage = () => {
  const { data, isLoading, isError, isRefetching, refetch } = useQuery(
    ["newsData"],
    getNews,
    {
      refetchInterval: 60 * 1000,
    }
  );

  if (isError) {
    return <Navigate to="/error" />;
  }

  return (
    <>
      <Header
        isLoading={isLoading}
        isRefetching={isRefetching}
        refetch={refetch}
      />
      {isLoading ? (
        <Spinner />
      ) : (
        <div className={styles.container}>
          {data?.map((item) => {
            return <ItemNews key={item?.id} item={item} />;
          })}
        </div>
      )}
    </>
  );
};
