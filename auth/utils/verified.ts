import Jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

export const verified = (req: Request, res: Response, next: NextFunction) => {
  try {
    const myToken = req.headers.authorization;
    if (myToken) {
      const token = myToken.split(" ")[2];
      if (token) {
        const realToken = token.split("")[1];
        Jwt.verify(realToken, "tokenSecret", (error: any, payload: any) => {
          if (error) {
            return res.status(404).json({
              message: "Invalid token",
            });
          } else {
            next();
          }
        });
      }
    }
  } catch (error) {}
};
