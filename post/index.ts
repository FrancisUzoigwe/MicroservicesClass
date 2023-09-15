import express from "express";

const app = express();

const port: number = 3100;
const realPort = port;
const Server = app.listen(realPort, () => {
  console.log("Server is live and listening on port", realPort);
});

process.on("uncaughtException", (err) => {
  console.log("");
  console.log("Server is shutting down due to uncaught exception", err);

  process.exit(1);
});

process.on("unhandledRejection", (reason) => {
  console.log("");
  console.log("Server is shutting down due to unhandled rejection", reason);

  Server.close(() => {
    process.exit(1);
  });
});
