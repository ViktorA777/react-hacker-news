import { Card, CardContent } from "@mui/material";
import styles from "./item.module.scss";
import { TNews } from "../../types/news";

import { Link } from "react-router-dom";
import { ItemInfo } from "../ItemInfo";

export type TItemNewsProps = {
  item: TNews;
};

export const ItemNews = ({ item }: TItemNewsProps) => {
  const { by, title, score, kids, time } = item;

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
              <ItemInfo by={by} score={score} kids={kids} time={time} />
            </div>
          </CardContent>
        </Card>
      </div>
    </Link>
  );
};
