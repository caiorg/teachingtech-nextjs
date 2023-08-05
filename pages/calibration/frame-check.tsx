import { Link, Paper } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { type ReactElement } from "react";
import Youtube from "../../components/Youtube";
import CalibrationLayout from "../../layouts/CalibrationLayout";

const CalibrationFrameCheck = () => {
  return (
    <Box
      sx={{
        my: 4,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
      }}>
      <Typography variant="h2">Frame Check</Typography>
      <Paper variant="outlined">
        <Typography variant="h5">Aim:</Typography>
        <Typography variant="body1">
          To ensure there are no underlying problems with the frame or
          mechanical components of the 3D printer.
        </Typography>
        <Typography variant="h5">When required:</Typography>
        <Typography variant="body1">
          Any time the frame or mechanical components have been disassembled or
          replaced.
        </Typography>
        <Typography variant="h5">Tools:</Typography>
        <Typography variant="body1">
          Basic spanners, Allen keys, etc.
        </Typography>
      </Paper>
      <Typography variant="body1">
        It would be easy to use the techniques elsewhere on this page to try and
        fix problems that were actually caused by a problem with the physical
        components, so we will eliminate this possibility first.
      </Typography>
      <Typography variant="body1">
        Many of these procedures are covered in this video:{" "}
        <Link href="https://youtu.be/T-Z3GmM20JM" target="_blank">
          Complete beginner's guide to 3D printing - Assembly, tour, slicing,
          levelling and first prints
        </Link>
      </Typography>
      <Youtube videoId="T-Z3GmM20JM" />
      <Typography variant="h4">Loose nuts and bolts</Typography>
      <Typography variant="body1">
        Move around the machine and check all fasteners. Crucial ones include
        those on the print head gantry such as those that hold the hot end on.
      </Typography>
      <Typography variant="h4">V-roller tension</Typography>
      <Typography variant="body1">
        If your printer has a motion system based on V-roller wheels riding on
        V-slot extrusions, check they are properly tensioned. Each location will
        have one eccentric nut. This can be twisted to either add or remove
        tension on the wheels.
      </Typography>
      <Typography variant="body1">
        <b>If the wheels are too loose:</b> Wobble will be present in the
        assembly, which will show in the print as surface artefacts.
      </Typography>
      <Typography variant="body1">
        <b>If the wheels are too tight:</b> The assembly will be too tense,
        which will wear the V-rollers prematurely.
      </Typography>
      <Typography variant="body1">
        In some rare instances poorly adjusted rollers may affect first layer
        accuracy across the bed.
      </Typography>
      <Typography variant="h4">Lubrication</Typography>
      <Typography variant="body1">
        Lubrication is an important maintenance task to perform regularly.
        Components that are not adequately lubricated may bind and affect print
        quality. Use{" "}
        <Link href="https://amzn.to/3aqLT0a" target="_blank">
          SuperLube Synthetic Grease
        </Link>
        . Lubrication needs to be performed regularly on any hardened rods,{" "}
        <Link
          href="https://www.youtube.com/watch?v=loBHYcifzRM"
          target="_blank">
          linear rails
        </Link>{" "}
        and lead screws.
      </Typography>
      <Typography variant="h4">Bed Levelling</Typography>
      <Typography variant="body1">
        Probably the most essential part of setting up your 3D printer. Most new
        users will trip up on this. If you have ABL, this includes making sure
        your Z offset has been set and saved. Dialing in the first layer has now
        been moved to its <Link href="#firstlayer">own tab</Link>.
      </Typography>
      <Typography variant="h4">PTFE Tube</Typography>
      <Typography variant="body1">
        If your printer has PTFE tube, such as a bowden tube setup for the
        extruder/hot end, it is essential to make the tube is fully inserted and
        seated in the coupler. Also ensure the coupler is properly tightened.
        You may wish to use a small retaining clip on the coupler to prevent the
        tube working loose:{" "}
        <Link href="https://www.thingiverse.com/thing:4268489" target="_blank">
          Creality PTFE clip by morfidesign
        </Link>
        .
      </Typography>
      <Typography variant="h4">Nozzle</Typography>
      <Typography variant="body1">
        It is worth heating up the nozzle and pushing some filament through to
        see if it is exiting the nozzle properly. If the diameter is
        inconsistent or the extruded plastic shoots to one side, it may indicate
        a partial blockage in the nozzle that will be a pain in the future. It
        is also worth checking if the nozzle is properly tightened. Only do this
        when it is hot, or you may break it.
      </Typography>
      <Typography variant="h4">Belts</Typography>
      <Typography variant="body1">
        Ensure all belts are properly aligned and tensioned sufficiently. Also
        check the grub screws are tight on the pulleys that connect the belts to
        the stepper motors.
      </Typography>
      <Typography variant="h4">Fans</Typography>
      <Typography variant="body1">
        Check all fans are spinning freely. This includes but is not limited to:
        mainboard cooling fan, heat sink fan, part cooling fan, PSU fan. It can
        be hard to diagose if a fan is performing at less than full capacity. It
        may be easier to simply replace than repair if you suspect a fan is
        failing.
      </Typography>
      <Typography variant="body1">
        Another suitable video for seeing some of these procedures is here:
      </Typography>
      <Youtube videoId="kAafiApJs9A" />
    </Box>
  );
};

CalibrationFrameCheck.getLayout = function getLayout(page: ReactElement) {
  return <CalibrationLayout>{page}</CalibrationLayout>;
};

export default CalibrationFrameCheck;
