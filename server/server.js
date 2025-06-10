import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 5000;

// Mock user data
const users = [
  { email: "admin@example.com", password: "admin123", appId: "app001" }
];

app.post("/api/login", (req, res) => {
  const { email, password, appId } = req.body;

  const user = users.find(
    (u) => u.email === email && u.password === password && u.appId === appId
  );

  if (user) {
    return res.json({ success: true, accessToken: "dummy-token-xyz" });
  }

  res.status(401).json({ success: false, message: "Invalid credentials" });
});




app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
