import { Paper } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { type ReactElement } from "react";
import CalibrationLayout from "../../layouts/CalibrationLayout";

const CalibrationFirstLayer = () => {
  return (
    <Box
      sx={{
        my: 4,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
      }}>
      <Typography variant="h2">First Layer</Typography>
      <Paper variant="outlined">
        <Typography variant="h5">Aim:</Typography>
        <Typography variant="body1">
          To ensure the printer bed is both level and an appropriate distance
          from the nozzle. In the case of using ABL, to check if compensation is
          working and the Z offset is correctly set. This will result in a first
          layer with the correct amount of 'squish', meaning good adhesion, and
          greatly increasing the chances of the print being successful.
        </Typography>
        <Typography variant="h5">When required:</Typography>
        <Typography variant="body1">
          Initial setup of the printer, regular maintainence, if first layer
          quality diminishes, any time the frame or mechanical components have
          been disassembled or replaced, any change of bed surface or nozzle, a
          change in filament that has significantly difference bed/hot end
          temperatures. There is a lot that can throw the bed level off, but
          careful use of your printer without any hardware changes should see it
          remain consistent for an extended period of time.
        </Typography>
        <Typography variant="h5">Tools:</Typography>
        <Typography variant="body1">
          The gcode generator on this page. A standard sheet of office paper.
        </Typography>
        <button
          class="zoom"
          onclick="$('html, body').animate({scrollTop: ($('#fl').offset().top-200)},500);">
          Scroll to gcode generator
        </button>
      </Paper>
    </Box>
  );
};

CalibrationFirstLayer.getLayout = function getLayout(page: ReactElement) {
  return <CalibrationLayout>{page}</CalibrationLayout>;
};

export default CalibrationFirstLayer;
