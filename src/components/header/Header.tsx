import styles from "./header.module.scss";
import { ButtonComponent } from "../Buttons";

type THeaderProps = {
  isRefetching: boolean;
  isLoading: boolean;
  refetch: Function;
};

export const Header = ({ isRefetching, isLoading, refetch }: THeaderProps) => {
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
