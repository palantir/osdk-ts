import { ObjectSet } from "./ObjectSet";
import { SearchJsonQueryV2 } from "./SearchJsonQueryV2";

export interface ObjectSetFilterType {
    objectSet: ObjectSet;
    where: SearchJsonQueryV2;
}
