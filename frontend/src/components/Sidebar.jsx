import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div
      style={{
        width: "240px",
        height: "100vh",
        background: "#111827",
        color: "white",
        padding: "30px 20px",
        position: "fixed",
        left: 0,
        top: 0,
      }}
    >
      <h2
        style={{
          marginBottom: "40px",
        }}
      >
        FinanceFlow
      </h2>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <Link
          to="/"
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
          Dashboard
        </Link>

        <Link
          to="/login"
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
          Login
        </Link>

        <Link
          to="/register"
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
          Register
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;