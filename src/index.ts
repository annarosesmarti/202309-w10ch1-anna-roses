import morgan from "morgan";
import app from "./app.js";
import thingsRouter from "./features/things/router/thingsRouter.js";
import { notFound } from "./features/things/middleWare/error/errorMiddleware.js";

app.use(morgan("dev"));

app.use("/things", thingsRouter);

app.use(notFound);
