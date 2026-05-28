import { useState } from "react";

import axios from "axios";

import {
  useNavigate,
  Link,
} from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [username, setUsername] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const handleRegister =
    async (e) => {
      e.preventDefault();

      try {
        const res = await axios.post(
          "http://localhost:5001/api/auth/register",
          {
            username,
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
        alert("Register failed");
      }
    };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1>Create Account</h1>

        <p className="subtitle">
          Join FinanceFlow Today
        </p>

        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) =>
              setUsername(
                e.target.value
              )
            }
          />

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
            Register
          </button>
        </form>

        <p className="switch-text">
          Already have account?{" "}
          <Link to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;