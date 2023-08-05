import { Alert, AlertTitle, Grid, Link } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { GetStaticProps } from "next";
import { type ReactElement } from "react";
import Youtube from "../../components/Youtube";
import CalibrationLayout from "../../layouts/CalibrationLayout";
import { getGcode } from "../../lib/gcodes";

const CalibrationIntroduction = ({
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
      <Typography variant="h2">Introduction</Typography>
      <Typography>
        This page serves as a companion for this video:{" "}
        <Link
          href="https://www.youtube.com/watch?v=rp3r921DBGI"
          target="_blank">
          3D printer calibration revolutionised - Step by step to better print
          quality
        </Link>
      </Typography>
      <Typography>
        It has received a major update to bring it up to V2 which is explained
        in this video:{" "}
        <Link
          href="https://www.youtube.com/watch?v=9kDK7czgMxc"
          target="_blank">
          3D printer calibration site V2 - Still free and better than ever!
        </Link>
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Youtube videoId="rp3r921DBGI" />
        </Grid>
        <Grid item xs={6}>
          <Youtube videoId="9kDK7czgMxc" />
        </Grid>
      </Grid>
      <Typography variant="body1">
        It aims to make calibrating your 3D printer as easy as possible. If you
        find it helps you and you would like to say thank you, here is a
        donation link:{" "}
        <Link href="https://paypal.me/testlawgicau" target="_blank">
          PayPal.me
        </Link>
      </Typography>
      <Typography variant="body1">
        Special thanks to my{" "}
        <Link href="http://www.patreon.com/teachingtech" target="_blank">
          Patrons
        </Link>{" "}
        for suggesting this video, helping define the contents and
        testing/proofing.
      </Typography>
      <Typography variant="body1">
        Watch the videos and then work through each tab. I have created a custom
        gcode generator to assist in making testing towers. This used to be a
        laborious process and beyond the skills of many users. Other times
        pre-sliced gcode was used from the internet, but it is impossible to
        have gcode available for every printer configuration. <i>Until now!</i>
      </Typography>
      <Alert severity="warning">
        <AlertTitle>Warning - Read carefully!</AlertTitle>
        <Typography variant="body1">
          Every attempt has been made to ensure this is safe but ultimately
          there always is risk in running pre-sliced gcode from the internet.
          Preview the gcode in your slicer or{" "}
          <Link href="http://zupfe.velor.ca" target="_blank">
            Zupfe GCode Viewer
          </Link>{" "}
          and <span>print at your own risk.</span>
        </Typography>
        <Typography variant="body1">
          Only print this gcode when you are present, alert and capable of
          stopping the printer in case of emergency.
        </Typography>
        <Typography variant="body1">
          Validation has been built into the forms to only allow sensible min
          and max values, however this is not foolproof.
        </Typography>
      </Alert>
      <Typography variant="h4">How this site works</Typography>
      <Typography variant="body1">
        The gcode generated by this page is originally from Simplify3D. This
        website then uses Javascript to modify the contents based on user
        inputs. This site is not a web based slicer, therefore it is limited in
        some ways.
      </Typography>
      <Typography variant="body1">
        The aim for the site is to provide compatibility with the majority of 3D
        printers. It aims to be beginner friendly and as such where possible the
        interface is kept as minimal as possible. Because of this, some requests
        for extra functionality will not be accepted. Something that makes the
        experience better for 1% of users but confuses 40% of others is not
        worth including.
      </Typography>
      <Typography variant="h4">
        Print Settings from the calibration S3D slicer profile
      </Typography>
      <Typography variant="body1">
        A 'calibration' slicer profile in S3D is used as the basis of the gcode
        on this site. S3D offers multiple processes to assist with splitting the
        towers into segments where the print settings can vary. Apart from this,
        the only special functionality used is post processing scripts to delete
        some lines, and to modify others with simple search and replace
        functions.
      </Typography>
      <Typography variant="body1">
        The general characteristics of the slicer profile are as follows:
      </Typography>
      <Typography variant="body1" component="ul">
        <li>
          Sliced for Marlin firmware, although in most cases will still be
          compatible with other firmwares.
        </li>
        <li>
          A build volume of 120 x 120 x 250 mm (This site can accommodate
          anything as small as this and anything larger)
        </li>
        <li>
          1.75mm filament (However <b>M221 S38</b> for 2.85 mm filament and{" "}
          <b>M221 S34</b> for 3.0 mm filament can be applied in the custom start
          gcode field as compensation)
        </li>
        <li>Absolute extrusion values (M82 as opposed to relative/M83)</li>
        <li>
          0.4mm nozzle and 0.2mm layer height, although now additional
          configurations are now possible
        </li>
        <li>Line width on auto, typically 120% of nozzle diameter</li>
        <li>
          Defaut feedrate of 60mm/sec. Modifiers include 60% for perimeters, 80%
          for solid infill, 166% travel moves, and 50% for the first layer
        </li>
        <li>Travel moves of 20 mm/sec for Z</li>
        <li>
          Flow rate of 0.90. Please see the note on the bottom of the{" "}
          <Link href="calibration.html#flow" target="_blank">
            flow
          </Link>{" "}
          tab for instructions on adapting this to your printer.
        </li>
        <li>
          Nozzle priming has been turned off to avoid bed clips or problems with
          delta printers. Use the custom start gcode feature to insert the
          priming sequence from your slicer profile.
        </li>
        <li>A single layer skirt (except on the acceleration test)</li>
        <li>100% part cooling fan for bridging</li>
        <li>First layer height of 100%, width 120%</li>
        <li>No minimum layer time, auto part cooling, etc</li>
        <li>4 top layers, 3 bottom layers, 3 perimeters</li>
        <li>20% rectilinear infill</li>
      </Typography>
      <Typography variant="body1">
        The default start gcode is as follows (this can be completely replaced
        by ticking the appropriate option on each form):
      </Typography>
      <Box
        sx={{
          my: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
        }}>
        <Typography component="pre" width="100%">
          <code className="language-gcode">{gcodes.start}</code>
        </Typography>
        <Typography variant="body1">
          The default end gcode is as follows (this can be completely replaced
          by ticking the approprpriate option on each form):
        </Typography>
        <Typography component="pre" width="100%">
          <code className="language-gcode">{gcodes.end}</code>
        </Typography>
        <Typography variant="body1">
          The information above is a summary, but if you wish to see the exact
          settings, the Simplify3D fff profile is available for download{" "}
          <Link href="public/files/calibration.fff" target="_blank">
            here
          </Link>
          .
        </Typography>
        <Typography variant="body1">
          Please note that non Simplify users can simply open this file in a
          text editor and everything will be listed.
        </Typography>
        <Typography variant="body1">
          You may notice settings related to temperatures, retraction, Z hop,
          part cooling, etc have set values, but these are altered by post
          processing scripts and this site to ultimately be set using the user's
          inputs. Several parameters work like this, please don't be fooled by
          what is in the slicing profile. Opening the final gcode file in a text
          editor and searching for 'custom' will show if the user's inputs have
          been successfully adopted.
        </Typography>
        <Typography variant="h4">
          Post processing scripts in Simplify3D
        </Typography>
        <Typography variant="body1">
          Unfortunately, there is no official reference for this provided by
          S3D. Instead, I have relied on{" "}
          <Link
            href="https://forum.simplify3d.com/viewtopic.php?f=8&t=1959"
            target="_blank">
            this forum post
          </Link>
          .
        </Typography>
        <Typography variant="body1">
          The scripts in my profile perform the following tasks:
        </Typography>
        <Typography variant="body1" component="ul">
          <li>Strip out all comments apart from new processes and layers.</li>
          <li>
            Strip out all start and end gcode. This gcode is instead provided by
            the site.
          </li>
          <li>
            Find specific lines relating to retraction and zhop, replacing them
            with comments this site expects to find and modify further.
          </li>
        </Typography>
        <Typography variant="body1" component="pre" width="100%">
          <code className="language-gcode">{gcodes["post-processing"]}</code>
        </Typography>
        <Typography variant="h4">
          Changes made per test to the base slicing profile
        </Typography>
        <Typography variant="body1">
          The information below is mainly for my reference. However, if you wish
          to duplicate the tests yourself out of interest or perhaps to develop
          a new test for the site, then the steps must be followed exactly,
          including replicating the process names.
        </Typography>
        <Typography variant="body1">
          First layer test: No changes, although it should be noted that a
          single square is included which is then duplicated and positioned by
          this site. Non uniform scaling of the source STL needs to occur to
          suit certain nozzle/layer combinations. The square should be 25 x 25
          mm with it's height scaled to match the target layer height.
        </Typography>
        <Typography variant="body1">Baseline test: No changes</Typography>
        <Typography variant="body1">Retraction test:</Typography>
        <Typography variant="body1" component="ul">
          <li>Z seam alignment set to 50, 50 mm</li>
          <li>'Process-1' from 0mm</li>
          <li>'Process-2' from 1mm - 0% infill</li>
          <li>
            'Process-3' from 5mm - 5.5 mm retraction at 41 mm/sec - 0% infill
          </li>
          <li>
            'Process-4' from 10mm - 6.0 mm retraction at 42 mm/sec - 0% infill
          </li>
          <li>
            'Process-5' from 15mm - 6.5 mm retraction at 43 mm/sec - 0% infill
          </li>
          <li>
            'Process-6' from 20mm - 7.0 mm retraction at 44 mm/sec - 0% infill
          </li>
          <li>
            'Process-7' from 25mm - 7.5 mm retraction at 45 mm/sec - 0% infill
          </li>
        </Typography>
        <Typography variant="body1">Temperature test:</Typography>
        <Typography variant="body1" component="ul">
          <li>'Process-1' from 0mm</li>
          <li>'Process-2' from 9mm</li>
          <li>'Process-3' from 17mm</li>
          <li>'Process-4' from 25mm</li>
          <li>'Process-5' from 33mm</li>
        </Typography>
        <Typography variant="body1">Acceleration test:</Typography>
        <Typography variant="body1" component="ul">
          <li>5 perimeter wide brim instead of a skirt</li>
          <li>0% infill</li>
          <li>0 top and bottom layers</li>
          <li>2 perimeters</li>
          <li>Z seam alignment set to 0, 100 mm</li>
          <li>'Process-1' from 0mm</li>
          <li>'Process-2' from 5mm</li>
          <li>'Process-3' from 10mm</li>
          <li>'Process-4' from 15mm</li>
          <li>'Process-5' from 20mm</li>
        </Typography>
        <Typography variant="body1">Speed tower test</Typography>
        <Typography variant="body1" component="ul">
          <li>Single outline corkscrew printing mode</li>
          <li>0 top layers</li>
          <li>1 bottom layer</li>
          <li>100% outline underspeed</li>
          <li>'Process-1' from 0mm</li>
          <li>'Process-2' from 10mm</li>
          <li>'Process-3' from 20mm</li>
          <li>'Process-4' from 30mm</li>
          <li>'Process-5' from 40mm</li>
        </Typography>
      </Box>
    </Box>
  );
};

CalibrationIntroduction.getLayout = function getLayout(page: ReactElement) {
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

export default CalibrationIntroduction;
