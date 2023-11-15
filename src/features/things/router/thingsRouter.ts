import { Router } from "express";
import things from "../data/things.js";
import ThingsController from "../controller/ThingsController.js";

const thingsRouter = Router();

const thingsController = new ThingsController();

thingsRouter.get("/", thingsController.getThings);

thingsRouter.get("/:idThings", thingsController.getThingsById);

thingsRouter.delete("/:idThing", (req, res) => {
  const id = +req.params.idThing;

  const thingIndex = things.findIndex((thing) => thing.id === id);

  if (thingIndex === -1) {
    res.status(404).json({ error: "Thing not found" });

    return;
  }

  things.splice(thingIndex, 1);

  res.status(200).json({});
});

export default thingsRouter;
