import { type Request, type Response } from "express";
import ThingsRepository from "../repository/ThingsRepository.js";

const thingsRepository = new ThingsRepository();

class ThingsController {
  public getThings(_req: Request, res: Response) {
    const things = thingsRepository.getThings();

    res.status(200).json(things);
  }
}

export default ThingsController;
