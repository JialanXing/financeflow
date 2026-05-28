function Navbar() {
  return (
    <div
      style={{
        height: "70px",
        background: "white",
        display: "flex",
        justifyContent:
          "space-between",
        alignItems: "center",
        padding: "0 40px",
      }}
    >
      <h2>FinanceFlow</h2>

      <button
        className="logout-btn"
        onClick={() => {
          localStorage.removeItem(
            "token"
          );

          window.location.href =
            "/login";
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default Navbar;