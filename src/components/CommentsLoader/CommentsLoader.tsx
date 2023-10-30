import { Stack, LinearProgress } from "@mui/material";

export function CommentsLoader() {
  return (
    <Stack sx={{ width: "100%", color: "grey.500" }} spacing={2}>
      <LinearProgress color="inherit" />
    </Stack>
  );
}
