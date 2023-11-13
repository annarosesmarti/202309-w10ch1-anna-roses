import morgan from "morgan";
import app from "./app.js";
import { notFound } from "./features/things/middleWare/error/errorMiddleware.js";

app.use(morgan("dev"));

app.use(notFound);
