import { Button, Paper, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";
import { useState, type ReactElement, ChangeEvent } from "react";
import Youtube from "../../components/Youtube";
import CalibrationLayout from "../../layouts/CalibrationLayout";
import CalibrationForm from "../../components/CalibrationForm";
import Grid from "@mui/material/Unstable_Grid2";

const CalibrationFirstLayer = () => {
  const [extraMargin, setExtraMargin] = useState(0);

  const handleExtraMargin = (event: ChangeEvent<HTMLInputElement>) => {
    setExtraMargin(+event.target.value);
  };

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
        <Button variant="contained">Scroll to gcode generator</Button>
      </Paper>
      <Typography variant="h2">General Principles</Typography>
      <Typography variant="body1">
        Getting a good first layer is an essential part of 3D printing
        successfully and is probably the number one cause of failed prints for
        new users.
      </Typography>
      <Typography variant="body1">
        Firstly, the bed needs to be parallel to the plane the nozzle traverses
        when moving in X and Y. This is achieved by moving the corners of the
        bed up and down relative to each other. With manual bed levelling this
        is achieved by turning the levelling knobs in each corner.
      </Typography>
      <Typography variant="body1">
        Secondly, the vertical distance between the bed and the nozzle needs to
        be correct for the first layer to print correctly. In a manual system,
        this is achieved by turning the levelling knobs in unison to lift or
        lower each corner the same amount.
      </Typography>
      <Typography variant="body1">
        If this distance is too far, the filament will not be squished into the
        bed enough, potentially even printing in mid air, and the print will
        detach from the bed and fail.
      </Typography>
      <Typography variant="body1">
        If the nozzle is too close, there will not be enough room for the
        extruded filament to take the correct shape, and it will be forced to
        squeeze outwards. In minor cases, the extruded line will be wider than
        necessary and produce <i>elephant's foot</i>. Prints like this may be
        quite hard to remove from the bed.
      </Typography>
      <Typography variant="body1">
        In extreme cases, there will be no way for the filament to exit the
        nozzle, at best causing extruder stepper motor skipping, and even
        potentially even jamming the extruder/hot end.
      </Typography>
      <Typography variant="body1">
        The contents of this page are shown in detail in the following video:
      </Typography>
      <Youtube videoId="Ze36SX1xzOE" />
      <Typography variant="h2">Manual Levelling Procedure</Typography>
      <Typography variant="body1">
        There are many techniques available, but a common one is to move the
        nozzle to the various corners of the bed, turning the levelling knobs
        until a standard piece of office paper can just fit between the bed and
        nozzle. A 0.1mm feeler gauge can be used, but make sure it doesn't have
        any oil on it that will contaminate the bed surface. Typically, this
        procedure is done with the bed at printing temperature (essential), and
        the nozzle close to printing temperature - just cool enough to prevent
        filament oozing out (optional).
      </Typography>
      <Typography variant="body1">
        It is common to follow up with a first layer calibration print, and
        'live level' the bed by continuing to adjust the knobs when the print is
        under way.
      </Typography>
      <Typography variant="body1">
        This process is depicted in detail in the video above, and a gcode
        generator is provided at the bottom of the page to generate a suitable
        test print.
      </Typography>
      <Typography variant="h2">Auto Bed Levelling and Z offset</Typography>
      <Typography variant="body1">
        Auto bed levelling automates the procedure to some extent. A sensor such
        as a BLtouch, EZABL, strain gauge or peizo transducer is used to probe
        the bed in a grid formation. At each location, it measures the vertical
        height, building up an array of stored values, called a <i>mesh</i>.{" "}
        <Link
          href="https://www.youtube.com/watch?v=vcxM7-VK44k"
          target="_blank">
          Manual mesh bed levelling
        </Link>{" "}
        can also be used to probe such a grid, but is still a manual process and
        hence not considered 'automatic'. Here is a visual representation of a
        probed mesh, shown with the{" "}
        <Link
          href="https://plugins.octoprint.org/plugins/bedlevelvisualizer/"
          target="_blank">
          Bed level visualizer Octprint plugin
        </Link>
        :
      </Typography>
      <Image
        src="/img/ablmesh.jpg"
        alt="Z Offset"
        sizes="100vw"
        width={100}
        height={100}
        style={{
          width: "100%",
          height: "auto",
          maxWidth: "880px",
        }}
      />
      <Typography variant="body1">
        During printing, the firmware will reference the mesh and compensate for
        an angled and/or warped bed by raising and lowering the nozzle using Z
        axis movement. This means the nozzle can travel up and down to match the
        contours of the bed, ensuring a good first layer.
      </Typography>
      <Typography variant="body1">
        If the printer's bed is perfectly flat, it is reasonable to claim ABL is
        not needed. Some users may still prefer it for the added convenience. In
        the event that the bed is warped (very common), it can be impossible to
        get a good first layer without ABL or manual mesh bed levelling. An
        example of this situation is shown in the video above.
      </Typography>
      <Typography variant="body1">
        It's worth noting that you can compensate for a warped bed in other
        ways, such as shimming the lower portions with a thin and flexible
        material. You can also use a glass/mirror plate over the top, which are
        typically quite flat. The downside of this is a longer time required to
        reach printing tempratures and additional load on the Y stepper (on an
        i3/'bed slinger' style printer) that may require lower print
        speed/acceleration.
      </Typography>
      <Typography variant="body1">
        The bed can be probed at the start of the print with a <code>G29</code>{" "}
        command, with the resulting mesh immediately used to compensate as the
        initial layers are produced. Alternatively, the bed can also be probed
        some other time (while not printing), the mesh stored in the EEPROM and
        then restored with <code>M420 S1</code> at the start of a print. In this
        case the print will start sooner, since we do not need to wait for a new
        mesh to be probed, although it may not be as accurate if anything has
        changed since probing. Either of these gcode commands should come after
        the <code>G28</code> home command in the start gcode.
      </Typography>
      <Typography variant="body1">
        Although ABL can compensate for a crooked/non-levelled bed, it is still
        better to attempt to level manually first and get everything in the
        ballpark.
      </Typography>
      <Typography variant="body1">
        Probing the bed and building a mesh only accounts for an uneven or
        warped bed. Like manual levelling, we still need to set the distance
        between the nozzle and bed to get a good first layer. This is where the
        Z offset comes in, which is simply the vertical distance between where
        the probe triggers vs the nozzle tip. Here are some examples:
      </Typography>
      <Typography variant="body1" component="ul">
        <li>
          BLtouch/EZABL/Pinda probe - The nozzle is in mid air when these probes
          are triggered, which will require a negative Z offset.
        </li>
        <li>
          Manual mesh bed levelling - The nozzle and bed will be very close when
          manually probing, requiring a Z offset close to zero.
        </li>
        <li>
          <Link
            href="https://www.youtube.com/watch?v=hs6IVfNrf5k"
            target="_blank">
            CR-6 style
          </Link>{" "}
          strain gauge - The nozzle touches the bed and flexes upwards to
          trigger the probe. This means the trigger point is actually higher
          than the nozzle tip, and requires a positive Z offset.
        </li>
      </Typography>
      <Typography variant="body1">
        The following picture shows Z offset for a BLtouch. You can clearly see
        the vertical difference between the probing point (tip of BLtouch) and
        the tip of the nozzle.
      </Typography>
      <Image
        src="/img/zoffset.jpg"
        alt="Z Offset"
        sizes="100vw"
        width={100}
        height={100}
        style={{
          width: "100%",
          height: "auto",
        }}
      />
      <Typography variant="body1">
        If <code>BABYSTEP_ZPROBE_OFFSET</code> is enabled in Marlin, setting the
        Z offset can easily be done as the first layer goes down. Don't forget
        to save to EEPROM afterwards. Newer versions of Marlin also have a Z
        offset wizard that can be included when you compile. I have a dedicated
        video for this:
      </Typography>
      <Youtube videoId="fN_ndWvXGBQ" />
      <Typography variant="body1">
        Another advantage of some ABL systems is that once the Z offset is set,
        you can interchange build surfaces of various thicknesses, with no
        changes needed for a successful first layer. Assuming the probe is
        triggered the same way on the bed surface, the Z offset is applied to
        this trigger point and the first layer height should be the same. On a
        manually levelled bed, the four corner knobs would need to be turned in
        unison to raise or lower the bed in accounting for thickness of the new
        build surface.
      </Typography>
      <Typography variant="h6" id="fl">
        First layer gcode generator
      </Typography>
      <Typography variant="body1">
        The following form will create a series of five squares that you can use
        to live level your bed or set the Z offset. It is quick to print and
        features one square in the middle of the bed, with four others in the
        corners. You can use these to turn the levelling knobs in each corner
        until they are consistent, or ensure your ABL system is working if you
        have one in place.
      </Typography>
      <Typography variant="body1">
        This test is intentionally placed before others because it is assumed
        that your first layer must be reasonable for the later tests to succeed.
        In some cases, however, if your flow, retraction, etc is way off, it may
        prevent your first layer from sticking properly and you may wish to try
        these other tests first.
      </Typography>
      <Image
        src="/img/firstlayerpreview.jpg"
        alt="First layer preview"
        sizes="100vw"
        width={100}
        height={100}
        style={{
          width: "100%",
          height: "auto",
        }}
      />
      <CalibrationForm>
        <Grid xs={12}>
          <Typography variant="body1">
            You may add extra margin for clearing bed clips, etc. Caution! If
            this is too large on small printers the squares will overlap. You
            may also use a negative value to space the squares further apart.
            Make sure to preview the gcode before printing!
          </Typography>
          <TextField
            label="Bed X dimension (mm)"
            value={extraMargin}
            onChange={handleExtraMargin}
            inputProps={{
              inputMode: "numeric",
              pattern: "[0-9]*",
              "aria-label": "Bed X dimension (mm)",
            }}
          />
        </Grid>
      </CalibrationForm>
    </Box>
  );
};

CalibrationFirstLayer.getLayout = function getLayout(page: ReactElement) {
  return <CalibrationLayout>{page}</CalibrationLayout>;
};

export default CalibrationFirstLayer;
