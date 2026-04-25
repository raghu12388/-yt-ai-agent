export function getStyle() {
  const styles = [
    "3AM horror story",
    "CCTV ghost footage",
    "true horror incident India",
    "haunted house story",
    "mirror ghost story",
    "unknown call horror"
  ];

  return styles[Math.floor(Math.random() * styles.length)];
}
