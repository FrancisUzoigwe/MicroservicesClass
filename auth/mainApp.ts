import express, { Application, Request, Response } from "express";
import cors from "cors";
import users from "./router/authRouter";

export const mainApp = (app: Application) => {
  app.use(express.json());
  app.use(cors());
  app.get("/", (req: Request, res: Response) => {
    try {
      return res.status(200).json({
        message: "This is a test request",
      });
    } catch (error) {
      return res.status(404).json({
        message: "Invalid request",
      });
    }
  });
  app.use("/api/v1", users);
};
