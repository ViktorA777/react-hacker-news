import { useNavigate, useParams } from "react-router-dom";
import { ButtonComponent } from "../../Buttons";
import { Comments } from "../../Comments";

import styles from "./newspage.module.scss";
import { useQuery } from "@tanstack/react-query";
import { newsService } from "../../api/newsService";
import { getTime } from "../../hooks/useTimes";
import { Spinner } from "../../Spinner";
import { ErrorPage } from "../Error";
import { TComments } from "../../types/comments";
import { TNews } from "../../types/news";

export const NewsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    data: news,
    isError,
    isRefetching,
    isFetching,
  } = useQuery(["newsIds"], () => newsService.getCurrentNews<TNews>(id));

  const {
    data: comments,
    isFetching: isFetchingComments,
    isRefetching: isRefetshingComments,
    refetch: refetchComments,
  } = useQuery(
    ["comments", news?.kids],
    () =>
      news?.kids &&
      Promise.all(news?.kids.map(newsService.getCurrentNews<TComments>)),
    { keepPreviousData: false }
  );

  if (isFetching) {
    return <Spinner />;
  }

  if (isError) {
    return <ErrorPage />;
  }

  const time = news !== undefined ? news.time : 0;

  const timer = getTime(time);

  return (
    <div className={styles.wrapper}>
      <div className={styles.button}>
        <ButtonComponent
          isRefetching={isRefetching}
          HandleClick={() => navigate("/")}
          title={"Back to News"}
        />
      </div>
      <div className={styles.content}>
        <p className={styles.p}>
          {timer} ago, by: {news?.by}, point: {news?.score}
        </p>
        <h2 className={styles.h}>{news?.title}</h2>
        <a className={styles.a} href={news?.url}>
          link to news
        </a>
      </div>
      {news?.kids && (
        <div className={styles.wrap}>
          <div className={styles.container}>
            <p className={styles.text}>Comments</p>
            <ButtonComponent
              isRefetching={isRefetshingComments}
              HandleClick={() => refetchComments()}
              title={"Refresh Comments"}
            />
          </div>
          <Comments
            comments={comments}
            isFetchingComments={isFetchingComments}
          />
        </div>
      )}
    </div>
  );
};
