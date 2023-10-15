import * as React from "react";
import { Stack, CircularProgress } from "@mui/material";
import styles from "./spinner.module.scss";

export function Spinner() {
  return (
    <Stack
      className={styles.wrap}
      sx={{ color: "grey.500" }}
      spacing={2}
      direction="row"
    >
      <CircularProgress size={70} color="inherit" />
    </Stack>
  );
}
