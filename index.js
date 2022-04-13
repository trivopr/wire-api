const dotenv = require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const salesRoute = require("./routes/sales");

const app = express();

//CORS
app.use(cors({ credentials: true, origin: true }));

app.use(express.json());
app.use(morgan("tiny"));

// ROUTE
app.get("/", (req, res) => {
  res.json({ status: "API is running" });
});

app.use("/api/retrieve-sales", salesRoute);

// SERVER PORT
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on domain http://localhost:${PORT}`);
});
