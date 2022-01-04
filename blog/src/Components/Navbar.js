const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>The Blog</h1>
      <div className="links">
        <a href="/">Home</a>
        <a
          href="/create"
          style={{
            color: "white",
            backgroundColor: "#7e12129c",
            borderRadius: "8px",
          }}
        >
          New Page
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
