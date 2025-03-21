import { ObjectTypeDefinition, Osdk, CompileTimeMetadata, ObjectMetadata, PropertyKeys, OsdkObjectPropertyType } from '@osdk/api';

type ObjectLocator<S extends ObjectTypeDefinition = ObjectTypeDefinition> = {
    $apiName: Osdk.Instance<S>["$apiName"];
    $primaryKey: Osdk.Instance<S>["$primaryKey"];
};
declare namespace Edits {
    type Object<S extends ObjectTypeDefinition> = CreateObject<S> | DeleteObject<S> | UpdateObject<S>;
    type Link<S extends ObjectTypeDefinition, L extends keyof CompileTimeMetadata<S>["links"]> = AddLink<S, L> | RemoveLink<S, L>;
}
interface AddLink<S extends ObjectTypeDefinition, L extends keyof CompileTimeMetadata<S>["links"]> {
    type: "addLink";
    apiName: L;
    source: ObjectLocator<S>;
    target: CompileTimeMetadata<S>["links"][L] extends ObjectMetadata.Link<infer T, any> ? ObjectLocator<T> : never;
}
interface RemoveLink<S extends ObjectTypeDefinition, L extends keyof CompileTimeMetadata<S>["links"]> {
    type: "removeLink";
    apiName: L;
    source: ObjectLocator<S>;
    target: CompileTimeMetadata<S>["links"][L] extends ObjectMetadata.Link<infer T, any> ? ObjectLocator<T> : never;
}
interface CreateObject<S extends ObjectTypeDefinition> {
    type: "createObject";
    obj: S;
    properties: {
        [P in PropertyKeys<S>]: OsdkObjectPropertyType<CompileTimeMetadata<S>["properties"][P]>;
    };
}
interface DeleteObject<S extends ObjectTypeDefinition> {
    type: "deleteObject";
    obj: ObjectLocator<S>;
}
interface UpdateObject<S extends ObjectTypeDefinition> {
    type: "updateObject";
    obj: ObjectLocator<S>;
    properties: {
        [P in Exclude<PropertyKeys<S>, CompileTimeMetadata<S>["primaryKeyApiName"]>]: OsdkObjectPropertyType<CompileTimeMetadata<S>["properties"][P]>;
    };
}
type AnyEdit = AddLink<any, any> | RemoveLink<any, any> | CreateObject<any> | DeleteObject<any> | UpdateObject<any>;
type AddLinkEdits<X extends AnyEdit> = Extract<X, {
    type: "addLink";
}>;
type RemoveLinkEdits<X extends AnyEdit> = Extract<X, {
    type: "removeLink";
}>;
type CreateObjectEdits<X extends AnyEdit> = Extract<X, {
    type: "createObject";
}>;
type DeleteObjectEdits<X extends AnyEdit> = Extract<X, {
    type: "deleteObject";
}>;
type UpdateObjectEdits<X extends AnyEdit> = Extract<X, {
    type: "updateObject";
}>;

export { type AnyEdit as A, type CreateObjectEdits as C, type DeleteObjectEdits as D, Edits as E, type ObjectLocator as O, type RemoveLinkEdits as R, type UpdateObjectEdits as U, type AddLinkEdits as a, type AddLink as b, type CreateObject as c, type DeleteObject as d, type RemoveLink as e, type UpdateObject as f };
