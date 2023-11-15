import type Thing from "../../../types.js";
import thingsKnow from "../data/things.js";

class ThingsRepository {
  public getThings(): Thing[] {
    return thingsKnow;
  }
}

export default ThingsRepository;
