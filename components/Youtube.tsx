import Box from "@mui/material/Box";
import styles from "./youtube.module.css";

export default function Youtube({ videoId }: { videoId: string }) {
  return (
    <Box className={styles.responsiveIframe}>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </Box>
  );
}
