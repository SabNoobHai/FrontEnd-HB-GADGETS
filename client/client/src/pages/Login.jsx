import { useState } from "react";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [appId, setAppId] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/login", {
        email,
        password,
        appId,
      });

      if (res.data.success) {
        setAccessToken(res.data.accessToken);
        setIsLoggedIn(true);
      }
    } catch (err) {
      alert("Invalid login");
    }
  };

  const infoBoxStyle = {
    background: "#ffffffcc",
    padding: "40px",
    borderRadius: "20px",
    boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.2)",
    width: "300px",
    textAlign: "center",
    margin: "10px"
  };

  if (isLoggedIn) {
    return (
      <div style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#000",
        fontFamily: "sans-serif"
      }}>
        <div style={{ display: "flex", gap: "20px" }}>
          <div style={infoBoxStyle}>
            <h3>Instagram</h3>
            <p><strong>App ID:</strong> {appId}</p>
            <p><strong>Access Token:</strong> {accessToken}</p>
          </div>
          <div style={infoBoxStyle}>
            <h3>Facebook</h3>
            <p><strong>App ID:</strong> {appId}</p>
            <p><strong>Access Token:</strong> {accessToken}</p>
          </div>
          <div style={infoBoxStyle}>
            <h3>YouTube</h3>
            <p><strong>App ID:</strong> {appId}</p>
            <p><strong>Access Token:</strong> {accessToken}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{
      height: "100vh",
      width: "100vw",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#000"
    }}>
      <form onSubmit={handleLogin} style={{
        background: "#ffffffcc",
        padding: "40px",
        borderRadius: "20px",
        boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.2)",
        width: "100%",
        maxWidth: "400px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}>
        <div style={{
          width: "80px",
          height: "80px",
          backgroundColor: "#e0e0e0",
          borderRadius: "50%",
          marginBottom: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "40px",
          color: "#7d2ae8"
        }}>👤</div>

        <input
          type="email"
          placeholder="Username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={inputStyle}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={inputStyle}
        />
        <input
          type="text"
          placeholder="App ID"
          value={appId}
          onChange={(e) => setAppId(e.target.value)}
          required
          style={inputStyle}
        />

        <button type="submit" style={{
          width: "100%",
          padding: "12px",
          marginTop: "15px",
          backgroundColor: "#9b59b6",
          color: "white",
          border: "none",
          borderRadius: "8px",
          fontWeight: "bold",
          cursor: "pointer"
        }}>Sign In</button>

        <div style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "10px",
          fontSize: "12px",
          width: "100%"
        }}>
          <label>
            <input type="checkbox" style={{ marginRight: "5px" }} /> Remember me
          </label>
          <a href="#" style={{ textDecoration: "underline", color: "#7d2ae8" }}>
            Forgot password?
          </a>
        </div>

        <div style={{ marginTop: "20px", fontSize: "14px" }}>
          Not a member?
          <a href="#" style={{
            padding: "5px 12px",
            border: "1px solid #7d2ae8",
            borderRadius: "12px",
            textDecoration: "none",
            color: "#7d2ae8",
            marginLeft: "5px"
          }}>Create account</a>
        </div>
      </form>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "12px",
  border: "1px solid #333",
  borderRadius: "6px",
  fontSize: "14px",
  backgroundColor: "#333",
  color: "#fff"
};
