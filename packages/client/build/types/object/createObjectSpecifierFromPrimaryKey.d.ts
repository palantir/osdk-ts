import type { ObjectOrInterfaceDefinition, ObjectSpecifier, PrimaryKeyType } from "@osdk/api";
export declare function createObjectSpecifierFromPrimaryKey<Q extends ObjectOrInterfaceDefinition>(def: Q, primaryKey: PrimaryKeyType<Q>): ObjectSpecifier<Q>;
