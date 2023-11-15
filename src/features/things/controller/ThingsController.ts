import { type Request, type Response } from "express";
import ThingsRepository from "../repository/ThingsRepository.js";

const thingsRepository = new ThingsRepository();

class ThingsController {
  public getThings(_req: Request, res: Response) {
    const things = thingsRepository.getThings();

    res.status(200).json(things);
  }

  public getThingsById(req: Request, res: Response) {
    const id = +req.params.idThings;

    try {
      const thing = thingsRepository.getThingsById(id);
      res.status(200).json(thing);
    } catch {
      res.status(404).json({ error: "thingId not found" });
    }
  }
}

export default ThingsController;
