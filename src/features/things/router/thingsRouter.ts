import { Router } from "express";
import things from "../data/things.js";

const thingsRouter = Router();

thingsRouter.get("/", (_req, res) => {
  res.status(200);
  res.json({ things });
});

thingsRouter.get("/:idTings", (req, res) => {
  const id = +req.params.idTings;

  const thing = things.find((thing) => thing.id === id);

  if (!thing) {
    res.status(404).json({});

    return;
  }

  res.status(200).json(thing);
});

export default thingsRouter;
