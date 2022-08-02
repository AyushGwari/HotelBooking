import express from "express"
import {updateUser,deleteUser,getUser,getUsers} from "../controllers/user.js"
import {verifyToken,verifyUser,verifyAdmin} from "../utils/verifyToken.js"
const router = express.Router();


// router.get("/checkauthentication",verifyToken,(req,res,next)=>{
//     res.send("hello user,you are logged in ");
// })

// router.get("/checkuser/:id",verifyUser,(req,res,next)=>{
//     res.send("hello user,you are logged in and you can delete your account");
// })

// router.get("/checkadmin/:id",verifyAdmin,(req,res,next)=>{
//     res.send("hello admin you are logged in you can delete all account");
// })

// update
router.put("/:id",verifyUser,updateUser)

// delete
router.delete("/:id",verifyUser,deleteUser)

// Get
router.get("/:id",verifyUser,getUser)

// get all
router.get("/",verifyAdmin,getUsers)


export default router