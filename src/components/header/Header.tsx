import styles from "./header.module.scss";
import { ButtonComponent } from "../Buttons";
import { useNews } from "../../hooks/useNews";

export const Header = () => {
  const { isRefetching, isLoading, refetch } = useNews();

  const btnLoading = isRefetching || isLoading;

  return (
    <div className={styles.header}>
      <h2 className={styles.h}>News Page</h2>
      <ButtonComponent
        onClick={() => refetch()}
        title={"Refresh"}
        disabled={btnLoading}
        isLoading={btnLoading}
      />
    </div>
  );
};
