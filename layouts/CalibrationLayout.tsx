import { Box } from "@mui/material";
import hljs from "highlight.js";
import gcode from "highlight.js/lib/languages/gcode";
import { ReactElement, useEffect } from "react";
import NavTabs from "../components/NavTabs";

hljs.registerLanguage("gcode", gcode);

export default function CalibrationLayout({
  children,
}: {
  children: ReactElement;
}) {
  useEffect(() => {
    hljs.initHighlighting();
  });

  return (
    <Box
      sx={{
        my: 4,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
      }}>
      <NavTabs
        tabs={[
          {
            label: "Introduction",
            href: "/calibration",
          },
          {
            label: "Frame Check",
            href: "/calibration/frame-check",
          },
          {
            label: "PID Autotune",
            href: "/calibration/pid-autotune",
          },
          {
            label: "First Layer",
            href: "/calibration/first-layer",
          },
        ]}>
        {children}
      </NavTabs>
    </Box>
  );
}
