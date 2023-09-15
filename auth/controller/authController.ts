import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const createuser = async (req: Request, res: Response) => {
  try {

    const { userName, email, password } = req.body;
    const createUser = await prisma.authModel.create({
      data: { userName, email, password },
    });

    return res.status(201).json({
      message: "User created successfully",
      data: createUser,
    });

  } catch (error) {
    return res.status(400).json({
      message: "Error occured while creating user",
    });
  }
};

export const signInUser = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;
   const signInUser = await prisma.authModel.findUnique({
    where: {email}
   })

   
    return res.status(201).json({
      message: "User signed-in successfully",
      data: signInUser,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Error occured while signin-in",
    });
  }
};


export const viewAllUser = async (req: Request, res: Response) => {
    try {
        const user = await prisma.authModel.findMany()
        return res.status(200).json({
            message : "Viewing all users ...."
        })
    } catch (error) {
        return res.status(400).json({
            message: "Error occured while viewing users",
          });
    }
}
