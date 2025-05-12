import express from "express";
import prisma from "@repo/db";

const app = express();

app.get("/", async (req, res) => {
  console.log(prisma);
  res.send("Hello World");
});

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});