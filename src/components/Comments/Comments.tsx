import { Card, CardContent, Divider } from "@mui/material";
import { useState } from "react";
import styles from "./comments.module.scss";
import { useQuery } from "@tanstack/react-query";
import { getCurrentItems } from "../../api/newsService";
import { CommentsLoader } from "../CommentsLoader";
import { getTime } from "../../utils/getTime";
import { TComments } from "../../types/comments";



type CommentsProps = {
  comments?: TComments[]
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
      Promise.all(commentsKids?.map(getCurrentItems<TComments>)),
    {
      keepPreviousData: true,
    }
  );

  const [showComments, setShowComments] = useState<Record<string, boolean>>({});

  const toggleShowComments = (id: number | string) => {
    setShowComments((state) => {
      return {
        ...state,
        [id]: !state[id],
      };
    });
  };

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
                onClick={() => toggleShowComments(item?.id)}
                className={styles.p}
              >
                {showComments[item?.id]
                  ? "(-)"
                  : `(${item?.kids?.length} more)`}
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
                        {timer} ago, by: {item?.by} {count}
                      </div>
                    </div>
                    <div>
                      <p dangerouslySetInnerHTML={{ __html: item.text }} />
                    </div>
                  </div>
                </CardContent>
                <Divider />
                {item.kids && showComments[item?.id] && (
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
