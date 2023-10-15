import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import styles from "./error.module.scss";
import { ButtonComponent } from "../../Buttons";

export const ErrorPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <WarningAmberIcon sx={{ height: 50, width: 50, color: "red" }} />
        <p className={styles.p}>Произошла ошибка запроса...</p>
      </div>
      <div>
        {/* <ButtonComponent title={"Back to News"} /> */}
      </div>
    </div>
  );
};
