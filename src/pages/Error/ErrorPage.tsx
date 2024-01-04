import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import styles from "./error.module.scss";
import { ButtonComponent } from "../../components/Buttons";
import { useNavigate } from "react-router-dom";

type TErrorProps = {
  error: any;
};

export const ErrorPage = ({ error }: TErrorProps) => {
  const navigate = useNavigate();

  const handleBack = () => navigate(-1);

  return (
    <div className={styles.wrapper}>
      <WarningAmberIcon sx={{ height: 70, width: 70, color: "red" }} />
      <div className={styles.content}>
        <p className={styles.p}>
          Произошла ошибка запроса <span>({error?.message})</span>...
        </p>
      </div>
      <div>
        <ButtonComponent onClick={handleBack} title={"Back to News"} />
      </div>
    </div>
  );
};
