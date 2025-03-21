import type { CompileTimeMetadata, ObjectMetadata, ObjectTypeDefinition, Osdk, OsdkObjectPropertyType, PropertyKeys } from "@osdk/api";
export type ObjectLocator<S extends ObjectTypeDefinition = ObjectTypeDefinition> = {
	$apiName: Osdk.Instance<S>["$apiName"]
	$primaryKey: Osdk.Instance<S>["$primaryKey"]
};
export declare namespace Edits {
	type Object<S extends ObjectTypeDefinition> = CreateObject<S> | DeleteObject<S> | UpdateObject<S>;
	type Link<
		S extends ObjectTypeDefinition,
		L extends keyof CompileTimeMetadata<S>["links"]
	> = AddLink<S, L> | RemoveLink<S, L>;
}
export interface AddLink<
	S extends ObjectTypeDefinition,
	L extends keyof CompileTimeMetadata<S>["links"]
> {
	type: "addLink";
	apiName: L;
	source: ObjectLocator<S>;
	target: CompileTimeMetadata<S>["links"][L] extends ObjectMetadata.Link<infer T, any> ? ObjectLocator<T> : never;
}
export interface RemoveLink<
	S extends ObjectTypeDefinition,
	L extends keyof CompileTimeMetadata<S>["links"]
> {
	type: "removeLink";
	apiName: L;
	source: ObjectLocator<S>;
	target: CompileTimeMetadata<S>["links"][L] extends ObjectMetadata.Link<infer T, any> ? ObjectLocator<T> : never;
}
export interface CreateObject<S extends ObjectTypeDefinition> {
	type: "createObject";
	obj: S;
	properties: { [P in PropertyKeys<S>] : OsdkObjectPropertyType<CompileTimeMetadata<S>["properties"][P]> };
}
export interface DeleteObject<S extends ObjectTypeDefinition> {
	type: "deleteObject";
	obj: ObjectLocator<S>;
}
export interface UpdateObject<S extends ObjectTypeDefinition> {
	type: "updateObject";
	obj: ObjectLocator<S>;
	properties: { [P in Exclude<PropertyKeys<S>, CompileTimeMetadata<S>["primaryKeyApiName"]>] : OsdkObjectPropertyType<CompileTimeMetadata<S>["properties"][P]> };
}
export type AnyEdit = AddLink<any, any> | RemoveLink<any, any> | CreateObject<any> | DeleteObject<any> | UpdateObject<any>;
export type AddLinkEdits<X extends AnyEdit> = Extract<X, {
	type: "addLink"
}>;
export type RemoveLinkEdits<X extends AnyEdit> = Extract<X, {
	type: "removeLink"
}>;
export type CreateObjectEdits<X extends AnyEdit> = Extract<X, {
	type: "createObject"
}>;
export type DeleteObjectEdits<X extends AnyEdit> = Extract<X, {
	type: "deleteObject"
}>;
export type UpdateObjectEdits<X extends AnyEdit> = Extract<X, {
	type: "updateObject"
}>;
