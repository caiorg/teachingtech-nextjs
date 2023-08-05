import { Box } from "@mui/material";
import { ReactElement } from "react";
import NavTabs from "../components/NavTabs";

export default function CalibrationLayout({
  children,
}: {
  children: ReactElement;
}) {
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
            label: "Page Three",
            href: "/spam",
          },
        ]}>
        {children}
      </NavTabs>
    </Box>
  );
}
