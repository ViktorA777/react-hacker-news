import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import styles from "./error.module.scss";
import { ButtonComponent } from "../../components/Buttons";
import { useNavigate } from "react-router-dom";

export const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <WarningAmberIcon sx={{ height: 50, width: 50, color: "red" }} />
        <p className={styles.p}>Произошла ошибка запроса...</p>
      </div>
      <div>
        <ButtonComponent onClick={() => navigate("/")} title={"Back to News"} />
      </div>
    </div>
  );
};
