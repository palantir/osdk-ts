import type { OntologyMetadata } from "./OntologyMetadata";

export type ObjectInfoFrom<
  O extends OntologyDefinition<any>,
  K extends ObjectTypesFrom<O>,
> = O["objects"][K];

export type ObjectTypesFrom<O extends OntologyDefinition<string>> =
  keyof O["objects"] & string;

export type PropertyKeysFrom<
  O extends OntologyDefinition<any>,
  K extends ObjectTypesFrom<O>,
> = keyof ObjectInfoFrom<O, K>["properties"] & string;

export type PropertyDefinitionsFrom<
  O extends OntologyDefinition<any>,
  K extends ObjectTypesFrom<O>,
> = ObjectInfoFrom<O, K>["properties"];

export type PropertyDefinitionFrom<
  O extends OntologyDefinition<any>,
  K extends ObjectTypesFrom<O>,
  P extends PropertyKeysFrom<O, K>,
> = PropertyDefinitionsFrom<O, K>[P];

export interface OntologyDefinition<K extends string> {
  metadata: OntologyMetadata;
  objects: {
    [KK in K]: ObjectDefinition<KK, K>;
  };
}

export interface ObjectDefinition<N extends K, K extends string> {
  apiName: N;
  properties: Record<string, PropertyDefinition>;
  links: Record<string, LinkDefinition<K>>;
}
export interface LinkDefinition<K extends string> {
  targetType: K;
  multiplicity: boolean;
}
export interface PropertyDefinition {
  readonly?: boolean;
  type: keyof ValidPropertyTypes; // FIXME WHAT ARE THE TYPES
  nullable?: boolean;
}

interface ValidPropertyTypes {
  string: string;
  datetime: Date;
  double: number;
  boolean: boolean;
}

export type OsdkObjectPropertyType<T extends PropertyDefinition> =
  T["nullable"] extends false
    ? ValidPropertyTypes[T["type"]]
    : ValidPropertyTypes[T["type"]] | undefined;

export type OsdkObjectLink<
  K extends string,
  O extends OntologyDefinition<K>,
  T extends LinkDefinition<any>,
> = T["multiplicity"] extends true
  ? Array<OsdkObjectLink_Inner<K, O, T>>
  : OsdkObjectLink_Inner<K, O, T>;

type OsdkObjectLink_Inner<
  K extends string,
  O extends OntologyDefinition<K>,
  T extends LinkDefinition<any>,
> = T["targetType"] extends keyof O["objects"]
  ? O["objects"][T["targetType"]]
  : never;
