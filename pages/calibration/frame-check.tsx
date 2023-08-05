import { Alert, AlertTitle, Grid, Link, Paper } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { GetStaticProps } from "next";
import { type ReactElement } from "react";
import YouTube from "react-youtube";
import CalibrationLayout from "../../layouts/CalibrationLayout";
import { getGcode } from "../../lib/gcodes";

const CalibrationFrameCheck = ({
  gcodes,
}: {
  gcodes: Record<string, string>;
}) => {
  return (
    <Box
      sx={{
        my: 4,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
      }}>
      <Paper variant="outlined">
        <Typography variant="h2">PID Autotune</Typography>
        <Typography variant="h5">Aim:</Typography>
        <Typography variant="body1">
          To ensure the heating of the 3D printer nozzle and bed are safe,
          stable and consistent.
        </Typography>
        <Typography variant="h5">When required:</Typography>
        <Typography variant="body1">
          Any time the hot end is changed, including adding/removing a silicone
          sock or altering part cooling fan/ducts. Any time the bed is changed,
          such as adding a glass/mirror plate, magnetic spring steel sheet
          and/or under bed insulation.
        </Typography>
        <Typography variant="h5">Tools:</Typography>
        <Typography variant="body1">
          Terminal software such as{" "}
          <Link href="https://www.pronterface.com/" target="_blank">
            Pronterface
          </Link>{" "}
          or{" "}
          <Link href="https://octoprint.org/" target="_blank">
            Octoprint
          </Link>
          .
        </Typography>
        <Typography variant="body1">
          Instructions on how to setup{" "}
          <Link href="troubleshooting.html#tools" target="_blank">
            terminal software
          </Link>{" "}
          can be found{" "}
          <Link href="troubleshooting.html#terminal" target="_blank">
            here.
          </Link>
        </Typography>
      </Paper>
    </Box>
  );
};

CalibrationFrameCheck.getLayout = function getLayout(page: ReactElement) {
  return <CalibrationLayout>{page}</CalibrationLayout>;
};

export const getStaticProps: GetStaticProps = async () => {
  const gcodes: Record<string, string> = getGcode([
    "start",
    "end",
    "post-processing",
  ]);
  return {
    props: {
      gcodes,
    },
  };
};

export default CalibrationFrameCheck;
