import { Navigate, useNavigate, useParams } from "react-router-dom";
import { ButtonComponent } from "../../components/Buttons";
import { Comments } from "../../components/Comments";

import styles from "./newspage.module.scss";
import { useQuery } from "@tanstack/react-query";
import { getCurrentItems } from "../../api/newsService";
import { Spinner } from "../../components/Spinner";
import { ErrorPage } from "../Error";
import { TComments } from "../../types/comments";
import { TNews } from "../../types/news";
import { ItemInfo } from "../../components/ItemInfo";

export const NewsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    data: news,
    isError,
    isFetching,
    isLoading,
  } = useQuery(["newsIds"], () => getCurrentItems<TNews>(id));

  const {
    data: comments,
    isFetching: isFetchingComments,
    isRefetching: isRefetshingComments,
    refetch: refetchComments,
  } = useQuery(
    ["comments", news?.kids],
    () => news?.kids && Promise.all(news.kids.map(getCurrentItems<TComments>))
  );

  const handleBack = () => navigate(-1);

  if (isFetching || isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <Navigate to="/error" />;
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.button}>
        <ButtonComponent onClick={handleBack} title={"Back to News"} />
      </div>
      <div className={styles.content}>
        <ItemInfo
          by={news.by}
          score={news.score}
          kids={news.kids}
          time={news.time}
        />
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
              isLoading={isRefetshingComments}
              onClick={() => refetchComments()}
              title={"Refresh Comments"}
              disabled={isRefetshingComments}
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
