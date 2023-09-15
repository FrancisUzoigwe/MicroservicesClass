import express, {Router} from "express"
import { createuser, signInUser } from "../controller/authController"

const router = express.Router()
router.route("/register").post(createuser)
router.route("/sign-in").post(signInUser)


export default router