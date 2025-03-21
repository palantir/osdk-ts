import type { ObjectTypeDefinition, Osdk, PrimaryKeyType, PropertyKeys } from "@osdk/api";
export interface OptimisticBuilder {
	updateObject: <T extends ObjectTypeDefinition>(value: Osdk.Instance<T>) => this;
	createObject: <T extends ObjectTypeDefinition>(type: T, primaryKey: PrimaryKeyType<T>, properties: Pick<Osdk.Instance<T>, PropertyKeys<T>>) => this;
}
