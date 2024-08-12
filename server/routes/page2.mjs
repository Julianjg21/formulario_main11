import express from "express";
import page from "../controllers/page2Controller.mjs";


//router that connects the routes with the main APP
const routerPage2 = express.Router();

routerPage2.post("/page2", page.page2Controller);


export default routerPage2 ;
