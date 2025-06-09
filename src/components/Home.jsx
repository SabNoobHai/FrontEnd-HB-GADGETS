import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      backgroundColor: "#f4f6f8",
      fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
    }}>
      <div style={{
        backgroundColor: "#fff",
        padding: "40px",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        maxWidth: "400px",
        width: "100%",
        textAlign: "center"
      }}>
        <h1 style={{
          fontSize: "28px",
          marginBottom: "30px",
          color: "#222",
          fontWeight: "600"
        }}>
          Social Media Manager
        </h1>

        <NavLink to="/schedulePost">
          <button style={buttonStyle("#4267B2")}>
            Login with Facebook
          </button>
        </NavLink>

        <div style={{ marginTop: "25px" }}>
          <NavLink to="/postAnalytics">
            <button style={buttonStyle("#28a745")}>
              View Post Analytics
            </button>
          </NavLink>

          <NavLink to="/schedulePost">
            <button style={buttonStyle("#17a2b8")}>
              Schedule New Post
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

const buttonStyle = (bgColor) => ({
  display: "block",
  width: "100%",
  padding: "12px 20px",
  margin: "10px 0",
  fontSize: "16px",
  fontWeight: "500",
  color: "white",
  backgroundColor: bgColor,
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  transition: "all 0.3s ease",
  textDecoration: "none"
});
