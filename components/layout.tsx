import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import pages from "../pages";
import ResponsiveAppBar from "./responsiveAppBar";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
  home?: boolean;
}) {
  return (
    <>
      <ResponsiveAppBar />
      <Container maxWidth="lg">{children}</Container>
    </>
  );
}
