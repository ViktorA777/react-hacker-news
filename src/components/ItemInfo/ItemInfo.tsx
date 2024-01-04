import styles from "./iteminfo.module.scss";
import { getTime } from "../../utils/getTime";
import { TNews } from "../../types/news";

type TItemInfoProps = Pick<TNews, "kids" | "time" | "by" | "score">;

export const ItemInfo = ({ by, score, kids, time }: TItemInfoProps) => {
  const timer = getTime(time);

  return (
    <div className={styles.info}>
      <p>{timer} ago</p>
      <p>, by: {by}</p>
      <p>, point: {score}</p>
      {kids ? <p>, comments: {kids.length}</p> : ""}
    </div>
  );
};
