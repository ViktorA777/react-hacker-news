import styles from "./mainPage.module.scss";
import { ItemNews } from "../../ItemNews";
import { useNews } from "../../hooks/useNews";
import { Spinner } from "../../Spinner";
import { ErrorPage } from "../Error";

export const MainPage = () => {
  const { data, isLoading, isError } = useNews();

  console.log("data", data);

  if (isError) {
    return <ErrorPage />;
  }

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className={styles.container}>
      {data?.map((item) => {
        return <ItemNews key={item?.id} item={item} />;
      })}
    </div>
  );
};
