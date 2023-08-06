import {
  Alert,
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Link from "next/link";
import { ChangeEvent, ReactNode, useState } from "react";

export default function CalibrationForm({ children }: { children: ReactNode }) {
  const [nozzleLayerHeight, setNozzleLayerHeight] = useState("40_20");
  const [additionalStartGCode, setAdditionalStartGCode] = useState("");
  const [additionalEndGCode, setAdditionalEndGCode] = useState("");
  const [displayAdditionalStartGCode, setDisplayAdditionalStartGCode] =
    useState(false);
  const [displayAdditionalEndGCode, setDisplayAdditionalEndGCode] =
    useState(false);
  const [addM80, setAddM80] = useState(false);
  const [removeT0, setRemoveT0] = useState(false);
  const [stripStartGCode, setStripStartGCode] = useState(false);
  const [stripEndGCode, setStripEndGCode] = useState(false);
  const [abl, setABL] = useState("0");
  const [zeroAtCenter, setZeroAtCenter] = useState(false);
  const [homeAllAxes, setHomeAllAxes] = useState(false);
  const [bedXDimmension, setBedXDimmension] = useState(220);

  const handleNozzleLayerHeight = (event: SelectChangeEvent) => {
    setNozzleLayerHeight(event.target.value);
  };

  const handleAdditionalStartGCode = (event: ChangeEvent<HTMLInputElement>) => {
    setAdditionalStartGCode(event.target.value);
  };

  const handleAdditionalEndGCode = (event: ChangeEvent<HTMLInputElement>) => {
    setAdditionalEndGCode(event.target.value);
  };

  const handleDispplayAdditionalStartGCode = () => {
    setDisplayAdditionalStartGCode(!displayAdditionalStartGCode);
  };

  const handleDispplayAdditionalEndGCode = () => {
    setDisplayAdditionalEndGCode(!displayAdditionalEndGCode);
  };

  const handleAddM80 = () => {
    setAddM80(!addM80);
  };

  const handleRemoveT0 = () => {
    setRemoveT0(!removeT0);
  };

  const handleStripStartGCode = () => {
    setStripStartGCode(!stripStartGCode);
  };

  const handleStripEndGCode = () => {
    setStripEndGCode(!stripEndGCode);
  };

  const handleSetZeroAtCenter = () => {
    setZeroAtCenter(!zeroAtCenter);
  };

  const handleHomeAllAxes = () => {
    setHomeAllAxes(!homeAllAxes);
  };

  const handleABL = (event: SelectChangeEvent) => {
    setABL(event.target.value);
  };

  const handleBedXDimmension = (event: ChangeEvent<HTMLInputElement>) => {
    setBedXDimmension(+event.target.value);
  };

  return (
    <Box component="form" noValidate sx={{ mt: 1 }}>
      <Grid container spacing={3}>
        <Typography variant="h4">Nozzle Diameter / Layer Height</Typography>
        <Typography variant="body1">
          Select your nozzle diameter and layer height. If you have not changed
          your nozzle, it will likely be 0.4 mm. 0.2 mm is a typical layer
          height for this nozzle.
        </Typography>
        <Typography variant="body1">
          25 options are available, however some of the tests don't work very
          well with the larger options.
        </Typography>
        <Grid xs={12}>
          <FormControl>
            <InputLabel>Nozzle Diameter / Layer Height</InputLabel>
            <Select
              value={nozzleLayerHeight}
              onChange={handleNozzleLayerHeight}>
              <MenuItem value="15_08">
                0.15 mm nozzle / 0.08 mm layer height
              </MenuItem>
              <MenuItem value="20_05">
                0.20 mm nozzle / 0.05 mm layer height
              </MenuItem>
              <MenuItem value="20_10">
                0.20 mm nozzle / 0.10 mm layer height
              </MenuItem>
              <MenuItem value="20_15">
                0.20 mm nozzle / 0.15 mm layer height
              </MenuItem>
              <MenuItem value="25_10">
                0.25 mm nozzle / 0.10 mm layer height
              </MenuItem>
              <MenuItem value="25_15">
                0.25 mm nozzle / 0.15 mm layer height
              </MenuItem>
              <MenuItem value="30_10">
                0.30 mm nozzle / 0.10 mm layer height
              </MenuItem>
              <MenuItem value="30_15">
                0.30 mm nozzle / 0.15 mm layer height
              </MenuItem>
              <MenuItem value="30_20">
                0.30 mm nozzle / 0.20 mm layer height
              </MenuItem>
              <MenuItem value="35_20">
                0.35 mm nozzle / 0.20 mm layer height
              </MenuItem>
              <MenuItem value="40_12">
                0.40 mm nozzle / 0.12 mm layer height
              </MenuItem>
              <MenuItem value="40_16">
                0.40 mm nozzle / 0.16 mm layer height
              </MenuItem>
              <MenuItem value="40_20" selected>
                0.40 mm nozzle / 0.20 mm layer height
              </MenuItem>
              <MenuItem value="40_24">
                0.40 mm nozzle / 0.24 mm layer height
              </MenuItem>
              <MenuItem value="40_28">
                0.40 mm nozzle / 0.28 mm layer height
              </MenuItem>
              <MenuItem value="50_20">
                0.50 mm nozzle / 0.20 mm layer height
              </MenuItem>
              <MenuItem value="50_30">
                0.50 mm nozzle / 0.30 mm layer height
              </MenuItem>
              <MenuItem value="50_35">
                0.50 mm nozzle / 0.35 mm layer height
              </MenuItem>
              <MenuItem value="60_20">
                0.60 mm nozzle / 0.20 mm layer height
              </MenuItem>
              <MenuItem value="60_30">
                0.60 mm nozzle / 0.30 mm layer height
              </MenuItem>
              <MenuItem value="60_40">
                0.60 mm nozzle / 0.40 mm layer height
              </MenuItem>
              <MenuItem value="80_30">
                0.80 mm nozzle / 0.30 mm layer height
              </MenuItem>
              <MenuItem value="80_40">
                0.80 mm nozzle / 0.40 mm layer height
              </MenuItem>
              <MenuItem value="80_50">
                0.80 mm nozzle / 0.50 mm layer height
              </MenuItem>
              <MenuItem value="80_60">
                0.80 mm nozzle / 0.60 mm layer height
              </MenuItem>
              <MenuItem value="100_50">
                1.00 mm nozzle / 0.50 mm layer height
              </MenuItem>
              <MenuItem value="100_75">
                1.00 mm nozzle / 0.75 mm layer height
              </MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid xs={12}>
          <Typography variant="h4">Additional start gcode</Typography>
          <Typography variant="body1">
            If you have additional start commands, tick the box and enter the
            gcode. This can be used for an <b>extruder prime sequence</b>,
            overwriting the standard <b>flow rate</b>, compensating for{" "}
            <b>2.85/3.00 mm filament</b>, setting <b>K factor</b> and more. Tick
            the box for more details.
          </Typography>
          <Grid spacing={2}>
            <Grid xs={12} md={4}>
              <FormControlLabel
                label="Additional start gcode"
                control={
                  <Checkbox
                    onChange={handleDispplayAdditionalStartGCode}
                    inputProps={{ "aria-label": "Additional start gcode" }}
                  />
                }
              />
            </Grid>
            <Grid xs={12} md={4}>
              <FormControlLabel
                label="Add M80 to turn PSU on"
                control={
                  <Checkbox
                    onChange={handleAddM80}
                    checked={addM80}
                    inputProps={{ "aria-label": "Add M80 to turn PSU on" }}
                  />
                }
              />
            </Grid>
            <Grid xs={12} md={4}>
              <FormControlLabel
                label="Remove <b>T0</b> from gcode (advanced users with MMU)"
                control={
                  <Checkbox
                    onChange={handleRemoveT0}
                    checked={removeT0}
                    inputProps={{
                      "aria-label":
                        "Remove T0 from gcode (advanced users with MMU)",
                    }}
                  />
                }
              />
            </Grid>
            {displayAdditionalStartGCode && (
              <Grid xs={12}>
                <FormControlLabel
                  label="Strip ALL original start gcode and use only custom gcode instead"
                  control={
                    <Checkbox
                      onChange={handleStripStartGCode}
                      inputProps={{
                        "aria-label":
                          "Strip ALL original start gcode and use only custom gcode instead",
                      }}
                    />
                  }
                />
                <Alert severity="warning">
                  This option will remove all start gcode except what is entered
                  in the box below. This means you are responsible for providing
                  commands to home the machine and heat the bed/nozzle. Note:
                  this gcode uses M82 absolute extrusion values, do not enter
                  the M83 command (relative extrusion values) here. Advanced
                  users only!
                </Alert>
                <TextField
                  multiline
                  value={additionalStartGCode}
                  onChange={handleAdditionalStartGCode}
                />
              </Grid>
            )}
          </Grid>
        </Grid>
        <Grid xs={12}>
          <Typography variant="h4">Auto Bed Levelling</Typography>
          <FormControl>
            <InputLabel>Select which method of ABL is in place</InputLabel>
            <Select
              value={abl}
              onChange={handleABL}
              inputProps={{
                "aria-label": "Select which method of ABL is in place",
              }}>
              <MenuItem value="0">No ABL</MenuItem>
              <MenuItem value="1">
                Probe new mesh at the start of print - G29 (BLtouch,EZABL,etc)
              </MenuItem>
              <MenuItem value="8">
                Probe new mesh at the start of print (Klipper) -
                BED_MESH_CALIBRATE
              </MenuItem>
              <MenuItem value="2">
                Restore saved ABL/manual mesh - M420 S1
              </MenuItem>
              <MenuItem value="3">Prusa MK3 - G28 W followed by G80</MenuItem>
              <MenuItem value="4">
                Prusa Mini - Only heat nozzle to 170, then G29
              </MenuItem>
              <MenuItem value="5">
                Unified Bed Leveling - Load Saved Mesh (slot 0) then 3 Probe
                Tilt{" "}
              </MenuItem>
              <MenuItem value="6">
                Unified Bed Leveling - Load Saved Mesh (slot 1) then 3 Probe
                Tilt{" "}
              </MenuItem>
              <MenuItem value="7">
                Unified Bed Leveling - Load Saved Mesh (slot 2) then 3 Probe
                Tilt{" "}
              </MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid xs={12}>
          <Typography variant="h4">Bed dimmensions</Typography>
          <Typography variant="body1">
            Inputting the correct number will attempt to move the print into the
            centre of the bed. If the 0,0 at centre button is checked for a
            delta, also enter your bed diameter. Please check the gcode to
            ensure it will fit on your bed. For unusual 3D printers, apply X/Y
            offsets to shift the gcode on the build platform. 99.9% of users
            will leave this on 0,0. Please ensure you check a gcode preview
            before printing if you use this feature.
          </Typography>
          <Grid xs={12}>
            <FormControlLabel
              label="0,0 at centre of bed (most deltas)"
              control={
                <Checkbox
                  onChange={handleSetZeroAtCenter}
                  inputProps={{
                    "aria-label": "0,0 at centre of bed (most deltas)",
                  }}
                />
              }
            />
          </Grid>
          <Grid xs={12}>
            <TextField
              label="Bed X dimension (mm)"
              value={bedXDimmension}
              onChange={handleBedXDimmension}
              inputProps={{
                inputMode: "numeric",
                pattern: "[0-9]*",
                "aria-label": "Bed X dimension (mm)",
              }}
            />
          </Grid>
        </Grid>
        <Grid xs={12}>
          <Typography variant="h4">Additional end gcode</Typography>
          <Typography variant="body1">
            If you have additional end commands, tick the box and enter the
            gcode.
          </Typography>
          <Grid xs={12} md={6}>
            <FormControlLabel
              label="Additional end gcode"
              control={
                <Checkbox
                  onChange={handleDispplayAdditionalEndGCode}
                  inputProps={{ "aria-label": "Additional end gcode" }}
                />
              }
            />
          </Grid>
          <Grid xs={12} md={6}>
            <FormControlLabel
              label="Home all axes with G28 at the end (delta)"
              control={
                <Checkbox
                  onChange={handleHomeAllAxes}
                  checked={homeAllAxes}
                  inputProps={{
                    "aria-label": "Home all axes with G28 at the end (delta)",
                  }}
                />
              }
            />
          </Grid>
          {children}
          {displayAdditionalEndGCode && (
            <Grid xs={12}>
              <FormControlLabel
                label="Strip ALL original end gcode and use only custom gcode instead"
                control={
                  <Checkbox
                    onChange={handleStripEndGCode}
                    inputProps={{
                      "aria-label":
                        "Strip ALL original end gcode and use only custom gcode instead",
                    }}
                  />
                }
              />
              <Alert severity="warning">
                This option will remove all end gcode except what is entered in
                the box below. This means you are responsible for providing
                commands to shut down all heaters, fans, motors, etc. Advanced
                users only!
              </Alert>
              <TextField
                multiline
                value={additionalEndGCode}
                onChange={handleAdditionalEndGCode}
              />
            </Grid>
          )}
        </Grid>
        <Alert severity="info">
          It is advised to preview the generated gcode through your slicer or{" "}
          <Link href="http://zupfe.velor.ca" target="_blank">
            Zupfe GCode Viewer
          </Link>{" "}
          before printing.
        </Alert>
      </Grid>
    </Box>
  );
}
