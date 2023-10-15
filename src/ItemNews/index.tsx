import { Card, CardContent } from "@mui/material";
import styles from "./item.module.scss";
import { TNews } from "../types/news";
import { getTime } from "../hooks/useTimes";
import { Link } from "react-router-dom";

type TItemNewsProps = {
  item: TNews;
};

export const ItemNews = ({ item }: TItemNewsProps) => {
  const { by, title, score, kids, time } = item;

  const timer = getTime(time);

  return (
    <Link to={`/item/${item.id}`}>
      <div className={styles.card}>
        <Card
          sx={{
            backgroundColor: "#f6f6f6",
          }}
        >
          <CardContent>
            <h4>{title}</h4>
            <div className={styles.p}>
              <div className={styles.com}>
                <p>{timer} ago</p>
                <p>, by: {by}</p>
                <p>, point: {score}</p>
                {kids ? <p>, comments: {kids.length}</p> : ""}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Link>
  );
};
