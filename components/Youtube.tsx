import styles from "./youtube.module.css";

export default function Youtube({ videoId }: { videoId: string }) {
  return (
    <div className={styles.responsiveIframe}>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}
