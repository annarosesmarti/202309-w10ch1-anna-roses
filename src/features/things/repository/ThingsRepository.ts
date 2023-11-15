import type Thing from "../../../types.js";
import thingsKnow from "../data/things.js";

class ThingsRepository {
  public getThings(): Thing[] {
    return thingsKnow;
  }

  public getThingsById(id: number): Thing | undefined {
    const thing = thingsKnow.find((thing) => thing.id === +id);

    if (!thing) {
      throw new Error("not found");
    }

    return thing;
  }
}

export default ThingsRepository;
