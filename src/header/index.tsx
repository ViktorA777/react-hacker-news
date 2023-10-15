import styles from "./header.module.scss";
import { ButtonComponent } from "../Buttons";
import { useNews } from "../hooks/useNews";

const Header = () => {
  const { isRefetching, refetch } = useNews();

  return (
    <div className={styles.header}>
      <h2 className={styles.h}>News Page</h2>
      <ButtonComponent
        HandleClick={() => refetch()}
        isRefetching={isRefetching}
        title={"Refresh"}
      />
    </div>
  );
};
export default Header;
