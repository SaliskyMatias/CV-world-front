import { Box, useTheme } from "@mui/material";
import { tokens } from "../../scenes/admin-dashboard/theme";



const ProgressCircle = ({ progress = 0, size = "40" }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const angle = progress * 360;

  console.log(progress);

  return (
    <Box
      sx={{
        background: `radial-gradient(${colors.white[500]} 55%, transparent 56%),
            conic-gradient(transparent 0deg ${angle}deg, ${colors.purple[500]} ${angle}deg 360deg),
            ${colors.green[500]}`,
        borderRadius: "50%",
        width: `${size}px`,
        height: `${size}px`,
      }}
    />
  );
};

export default ProgressCircle;