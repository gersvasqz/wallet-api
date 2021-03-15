import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { config } from "dotenv";
import router from "./router";

const app = express();
config();

const PORT = process.env.PORT || 9000;
const HOST = process.env.HOST || "127.0.0.1";

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(express.static("public"));

app.use(router);

app.listen(PORT, HOST, () => console.info("Server is running"));
