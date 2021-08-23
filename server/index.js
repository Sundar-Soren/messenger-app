const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 5001;

const conversationRoute = require("./routes/conversation");
const userRoute = require("./routes/user");
const messageRoute = require("./routes/message");

app.use(cors());
app.use(express.json());

app.use("/api", userRoute);
app.use("/api/conversation", conversationRoute);
app.use("/api/message", messageRoute);
mongoose
  .connect(process.env.DATA_BASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DATA-BASE CONNECTED");
  })
  .catch((err) => console.log(err.message));

app.listen(PORT, () => {
  console.log(`server is running at ${PORT} PORT`);
});
