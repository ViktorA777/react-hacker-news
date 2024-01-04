import { Button, ButtonProps, CircularProgress } from "@mui/material";

type ButtonComponentProps = ButtonProps & {
  isLoading?: boolean;
};

export const ButtonComponent: React.FC<ButtonComponentProps> = ({
  isLoading,
  title,
  ...props
}) => {
  return (
    <Button sx={{ fontFamily: "Raleway" }} variant="outlined" {...props}>
      {title}{" "}
      {isLoading && (
        <CircularProgress
          sx={{ marginLeft: "10px" }}
          size={15}
          color="inherit"
        />
      )}
    </Button>
  );
};
