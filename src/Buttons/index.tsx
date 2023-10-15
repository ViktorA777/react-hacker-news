import { Button } from "@mui/material";

type ButtonProps = {
  title: string;
  HandleClick: () => void;
  isRefetching: boolean;
};

export const ButtonComponent: React.FC<ButtonProps> = ({
  title,
  HandleClick,
  isRefetching,
}) => {
  return (
    <Button
      onClick={HandleClick}
      disabled={isRefetching}
      sx={{ fontFamily: "Raleway" }}
      variant="outlined"
    >
      {title}
    </Button>
  );
};
