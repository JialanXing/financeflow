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
        boxShadow:
          "0 2px 10px rgba(0,0,0,0.08)",
      }}
    >
      <h2>FinanceFlow</h2>

      <button
        onClick={() => {
          localStorage.removeItem(
            "token"
          );

          window.location.href =
            "/login";
        }}
        style={{
          padding: "10px 18px",
          border: "none",
          borderRadius: "10px",
          background: "#ef4444",
          color: "white",
          cursor: "pointer",
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default Navbar;