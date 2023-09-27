import type {
  OntologyDefinition,
  OsdkObjectPropertyType,
  PropertyKeysFrom,
} from "./Definition";

export type OsdkObjectFrom<
  K extends string,
  T extends OntologyDefinition<K>,
  L extends PropertyKeysFrom<T, K>,
> = {
  [P in L]: OsdkObjectPropertyType<T["objects"][K]["properties"][P]>;
} & {
  __name: K;
}; // TODO
