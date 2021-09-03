export const Header = () => {
  return (
    <nav
      style={{
        display: "grid",
        gridTemplateColumns: "2fr 1fr 2fr 1fr 2fr",
        alignItems: "center",
        width: "75vw",
      }}
    >
      <a href="/">Home</a>

      <p style={{ width: "50px", margin: "auto" }}>|</p>
      <a href="/discussion">Discussion</a>
      <p style={{ width: "50px", margin: "auto" }}>|</p>
      <a href="/about">About</a>
    </nav>
  );
};
