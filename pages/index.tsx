import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "../src/Link";
import ProTip from "../src/ProTip";
import { siteTitle } from "./_app";
import YouTube from "react-youtube";
import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <Box
        sx={{
          my: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Typography variant="h3" component="h1" gutterBottom>
          {siteTitle}
        </Typography>
      </Box>
      <Box
        sx={{
          my: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
        }}>
        <Typography variant="body1" gutterBottom>
          Welcome to the companion website for the{" "}
          <Link
            href="https://www.youtube.com/channel/UCbgBDBrwsikmtoLqtpc59Bw"
            target="_blank">
            Teaching Tech YouTube channel
          </Link>
          .
        </Typography>
        <Typography variant="body1" gutterBottom>
          Teaching Tech is a YouTube channel dedicated to providing quality
          content that will help expand your technology related skills and
          knowledge.
        </Typography>
        <Typography variant="body1" gutterBottom>
          As a qualified Industrial Designer and Primary/Secondary school
          teacher, my expertise is very broad. The channel features tutorials on
          3D modelling, 3D printing, laser cutting, CNC machining, coding,
          robotics, electronics and graphic design. I also have other fun tech
          which I review and feature.
        </Typography>
        <Typography variant="body1" gutterBottom>
          I pride myself on my integrity and can guarantee only unbiased, unpaid
          reviews and opinions. The content of my videos is something you can
          trust to help form your opinion. Finally, I love doing things on a
          budget. This means I can pass on some great tips that can get you
          started for minimal outlay.
        </Typography>
        <Typography variant="body1" gutterBottom>
          This website aims to build on the content provided by my YouTube
          videos. In some ways it will be more useful than video, which is a one
          way communication, because I can include interactive content or
          detailed methodologies. In time this site will be expanded to include
          more written instructions to compliment videos.
        </Typography>
        <Typography variant="body1" gutterBottom>
          This site, like the YouTube video descriptions, contain affiliate
          marketing links. These include affiliate links through Amazon as I am
          an Amazon Associate. An affiliate link gives me a percentage of the
          sale price as a commision, with no increase in price for you. It is
          understandable if you wish not to use them, so please avoid them if
          you prefer.
        </Typography>
        <Typography variant="body1" gutterBottom>
          This channel trailer was the first ever video on the channel but
          proved to be accurate. Although I primarily focus on 3D printing, I
          have covered everything listed except video editing.
        </Typography>
        <YouTube videoId="fYVO7ulhOp0" />
        <ProTip />
      </Box>
    </Layout>
  );
}
