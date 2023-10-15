import { Card, CardContent, Divider } from "@mui/material";

import { useState } from "react";

import styles from "./comments.module.scss";
import { useQuery } from "@tanstack/react-query";
import { newsService } from "../api/newsService";
import { CommentsLoader } from "../CommentsLoader";
import { getTime } from "../hooks/useTimes";
import { TComments } from "../types/comments";

type CommentsProps = {
  comments?: TComments[];
  isFetchingComments?: boolean;
  commentsKids?: number[];
};

export const Comments = ({
  comments,
  isFetchingComments,
  commentsKids,
}: CommentsProps) => {
  const { data, isFetching } = useQuery(
    [`commentsIds`, commentsKids],
    () =>
      commentsKids &&
      Promise.all(commentsKids?.map(newsService.getCurrentNews<TComments>))
  );

  const [showComments, setShowComments] = useState<boolean>(false);

  console.log("commentsIds", data);
  console.log("com", comments);

  return (
    <>
      {isFetchingComments || isFetching ? (
        <CommentsLoader />
      ) : (
        <div className={styles.comments}>
          {(comments || data)?.map((item) => {
            const timer = getTime(item?.time);

            const count = item?.kids?.length ? (
              <p
                onClick={() => setShowComments(!showComments)}
                className={styles.p}
              >
                ({item?.kids?.length} more)
              </p>
            ) : (
              ""
            );

            return (
              <Card
                key={item.id}
                sx={{
                  backgroundColor: "#f6f6f6",
                }}
              >
                <CardContent>
                  <div>
                    <div className={styles.content}>
                      <div className={styles.info}>
                        {timer} ago, by: {item.by} {count}
                      </div>
                    </div>
                    <div>
                      <p dangerouslySetInnerHTML={{ __html: item.text }} />
                    </div>
                  </div>
                </CardContent>
                <Divider />
                {item.kids && showComments && (
                  <div className={styles.more}>
                    <Comments commentsKids={item.kids} />
                  </div>
                )}
              </Card>
            );
          })}
        </div>
      )}
    </>
  );
};
