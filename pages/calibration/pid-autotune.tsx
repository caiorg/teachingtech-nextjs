import { Link, Paper } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { type ReactElement } from "react";
import Youtube from "../../components/Youtube";
import CalibrationLayout from "../../layouts/CalibrationLayout";

const CalibrationPidAutotune = () => {
  return (
    <Box
      sx={{
        my: 4,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
      }}>
      <Typography variant="h2">PID Autotune</Typography>
      <Paper variant="outlined">
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
      <Typography variant="body1">
        PID autotuning is quick and easy, and relates to the most potentially
        dangerous components of your 3D printer: the heaters. It makes sense to
        do it as a first step. This procedure is covered in this video:{" "}
        <Link href="https://youtu.be/qCtL0Yd_w0I" target="_blank">
          Two easy fixes for 3D printer temperature swings
        </Link>
      </Typography>
      <Youtube videoId="qCtL0Yd_w0I" />
      <Typography variant="body1">
        In Marlin, this is a very straightforward process using{" "}
        <Link href="https://marlinfw.org/docs/gcode/M303.html" target="_blank">
          M303
        </Link>
        .
      </Typography>
      <Typography variant="body1">
        It is recommended to run the tuning with conditions as close to printing
        as possible. This means filament loaded and the part cooling fan set to
        your normal speed. This can be done from the printer's interface or in a
        terminal, by entering the following (this example is 100% fan speed):
      </Typography>
      <Typography component="pre" width="100%">
        <code className="language-gcode">M106 S255</code>
      </Typography>
      <Typography variant="body1">
        It is not essential, but you may prefer to start this process with the
        hot end at room temperature. To tune the hot end, enter in a terminal:
      </Typography>
      <Typography component="pre" width="100%">
        <code className="language-gcode">M303 E0 S200 U1</code>
      </Typography>
      <Typography variant="body1">
        This will tune the hot end at 200 degrees. The{" "}
        <code className="language-gcode">S</code> value can be altered to suit
        your most common printing temperature. The{" "}
        <code className="language-gcode">U1</code> means the result is stored to
        RAM and we can save it immediately to EEPROM by sending:
      </Typography>
      <Typography component="pre" width="100%">
        <code className="language-gcode">M500</code>
      </Typography>
      <Typography variant="body1">
        For the bed, <code className="language-gcode">PIDTEMPBED</code> must be
        enabled in the firmware, then the command is quite similar:
      </Typography>
      <Typography component="pre" width="100%">
        <code className="language-gcode">M303 E-1 S60 U1</code>
      </Typography>
      <Typography variant="body1">
        The bed is selected with <code className="language-gcode">E-1</code>,
        and the temp set to 60 degrees. Substitute as necessary for your normal
        printing bed temperature. Once again save to EEPROM afterwards with:
      </Typography>
      <Typography component="pre" width="100%">
        <code className="language-gcode">M500</code>
      </Typography>
      <Typography variant="body1">
        It may be preferable to have the printer as close to printing conditions
        as possible during these tuning procedures. That means having filament
        loaded and the part cooling fan on for PLA temperatures. If there is no
        UI button available to turn on the part cooling fan, you can do it
        manually via gcode with{" "}
        <code className="language-gcode">M106 S255</code>.
      </Typography>
      <Paper variant="outlined">
        <Typography variant="h5">
          Special note: If your printer doesn't support saving settings in
          EEPROM
        </Typography>
        <Typography variant="body1">
          In this case, you need to insert{" "}
          <code className="language-gcode">M301</code> (hot end) or{" "}
          <code className="language-gcode">M304</code> (bed) into your slicer
          start gcode so the correct settings are loaded before each print.
        </Typography>
        <Typography variant="body1">
          After PID auto tuning, the final values for P, I and D will be listed
          in the terminal. Retreive them and use them as follows for the hot
          end:
        </Typography>
        <Typography component="pre" width="100%">
          <code className="language-gcode">
            M301 E0 P[p value] I[i value] D[d value]
          </code>
        </Typography>
        <Typography variant="body1">
          This will set the PID values for the default hot end, eg.{" "}
          <code className="language-gcode">M301 E0 P34.4 I0.02 D5.7</code>{" "}
          (bogus numbers, please don't copy them).
        </Typography>
        <Typography component="pre" width="100%">
          M304 P[p value] I[i value] D[d value]
        </Typography>
        <Typography variant="body1">
          This will set the PID values for the bed, eg.{" "}
          <code className="language-gcode">M304 P26.0 I1.33 D20.5</code> (bogus
          numbers, please don't copy them).
        </Typography>
      </Paper>
    </Box>
  );
};

CalibrationPidAutotune.getLayout = function getLayout(page: ReactElement) {
  return <CalibrationLayout>{page}</CalibrationLayout>;
};

export default CalibrationPidAutotune;
