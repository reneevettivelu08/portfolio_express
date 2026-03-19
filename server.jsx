const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;

  console.log("New message:", name, email, message);

  // Later: integrate email service (SendGrid, Nodemailer)
  res.status(200).json({ success: true });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));