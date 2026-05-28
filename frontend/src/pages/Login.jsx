import { useState } from "react";

import axios from "axios";

import {
  useNavigate,
  Link,
} from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5001/api/auth/login",
        {
          email,
          password,
        }
      );

      localStorage.setItem(
        "token",
        res.data.token
      );

      navigate("/");
    } catch (error) {
      alert("Login failed");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1>FinanceFlow</h1>

        <p className="subtitle">
          Smart Expense Management
        </p>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(
                e.target.value
              )
            }
          />

          <button type="submit">
            Login
          </button>
        </form>

        <p className="switch-text">
          No account?{" "}
          <Link to="/register">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;