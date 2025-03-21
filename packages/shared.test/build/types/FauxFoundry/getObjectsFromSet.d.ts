import type * as OntologiesV2 from "@osdk/foundry.ontologies";
import type { BaseServerObject } from "./BaseServerObject.js";
import type { FauxDataStore } from "./FauxDataStore.js";
export declare function getObjectsFromSet(ds: FauxDataStore, objectSet: OntologiesV2.ObjectSet, methodInput: BaseServerObject | undefined): Array<BaseServerObject>;
export declare function getDerivedPropertyValue(ds: FauxDataStore, obj: BaseServerObject, def: OntologiesV2.DerivedPropertyDefinition): any;
export declare function createOrderBySortFn(orderBy: OntologiesV2.SearchOrderByV2): (a: BaseServerObject | undefined, b: BaseServerObject | undefined) => number;
