import { Container } from "@mui/material";
import ResponsiveAppBar from "./ResponsiveAppBar";

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
