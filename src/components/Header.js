export const Header = () => {
  return (
    <nav
      style={{
        display: "grid",
        gridAutoFlow: 'column',
        gridAutoColumns: "minmax(0, 1fr)",
        alignItems: "center",
        width: "75vw",
      }}
    >
      <a href="/">Home</a>

      <p style={{ width: "50px", margin: "auto" }}>|</p>
      <a href="/discussion">Discussion</a>
      <p style={{ width: "50px", margin: "auto" }}>|</p>
      <a href="/about">About</a>
      <p style={{ width: "50px", margin: "auto" }}>|</p>
      <a href="/gallery">Gallery</a>
    </nav>
  );
};
