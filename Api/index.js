import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
//import { dirname } from "path;";
import multer from "multer";
//import { FileURLToPath } from "url";
import path from "path";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
dotenv.config();
app.use(cookieParser());
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    if (process.env.ALLOWED_ORIGINS) {
      callback(null, true);
    } else {
      callback(new Error("not allowed bby CORS!"));
    }
  },
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "public"));
  },
  filename: (rreq, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
export const upload = multer({ storage });
app.use((req, res, next) => {
  req.upload = upload;
  next();
});
mongoose
  .connect(process.env.MongoDB)
  .then(() => {
    console.log("Connected to MongoDB!");
  })
  .catch((err) => console.log(err));
app.use("/api/auth", authRouter);
app.use("/api/post", postRouter);
app.use("/api/post/upload", upload.single("file"), postRouterUpload);
app.use("/upload", express.static(path.join(__dirname, "public")));
app.use("/", async (req, res) => {
  try {
    res.json("Hello from server :)");
  } catch (error) {
    console.error(error);
    res.status(500).json("Internal serverr error: 500!");
  }
});
app.listen(process.env.PORT, () => console.log("server is running: 5505!!"));
