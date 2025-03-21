import { Y as ObjectOrInterfaceDefinition, U as FilteredPropertyKeys, M as MediaReference, O as ObjectTypeDefinition, Z as PropertyKeys, N as NullabilityAdherence, z as SelectArg, a7 as Osdk, ag as ExtractOptions, F as FetchPageArgs, C as FetchPageResult, b as OsdkBase } from '../FilteredPropertyKeys-G2dSO0w4.cjs';
export { ah as MinimalObjectSet } from '../FilteredPropertyKeys-G2dSO0w4.cjs';
import 'type-fest';
import 'geojson';

type Experiment<V extends string, T extends string = string, K extends Record<string, (...args: any[]) => any> = any> = {
    type: "experiment";
    name: T;
    branded?: K;
    version: V;
};
type ExperimentFns<B extends Experiment<string, string>> = NonNullable<B["branded"]>;

/**
 * @experimental This feature is experimental and might change in the future.
 *
 * Uploads a media item to the media property of the specified object type.
 *
 * @param data - Data to upload as media item
 * @param fileName - Name that will be assigned as path to the uploaded media item.
 * @param objectType - Object type to which the media item will be uploaded.
 * @param propertyType - Media reference property of the corresponding object type to which the media item will be uploaded.
 *
 * @returns media reference of the uploaded media item.
 */
type createMediaReference = <Q extends ObjectOrInterfaceDefinition, const L extends FilteredPropertyKeys<Q, "mediaReference">>(args: {
    data: Blob;
    fileName: string;
    objectType: Q;
    propertyType: L;
}) => Promise<MediaReference>;
declare const __EXPERIMENTAL__NOT_SUPPORTED_YET__createMediaReference: Experiment<"2.1.0", "__EXPERIMENTAL__NOT_SUPPORTED_YET__createMediaReference", {
    createMediaReference: createMediaReference;
}>;

type fetchOneByRidFn = <Q extends ObjectTypeDefinition, const L extends PropertyKeys<Q>, const R extends boolean, const S extends false | "throw" = NullabilityAdherence.Default>(objectType: Q, rid: string, options?: SelectArg<Q, L, R, S>) => Promise<Osdk.Instance<Q, ExtractOptions<R, S>, L>>;
declare const __EXPERIMENTAL__NOT_SUPPORTED_YET__fetchOneByRid: Experiment<"2.1.0", "__EXPERIMENTAL__NOT_SUPPORTED_YET__fetchOneByRid", {
    fetchOneByRid: fetchOneByRidFn;
}>;

type fetchPageByRidFn = <Q extends ObjectOrInterfaceDefinition, const L extends PropertyKeys<Q>, const R extends boolean, const S extends NullabilityAdherence, const T extends boolean>(objectType: Q, rids: string[], options?: FetchPageArgs<Q, L, R, any, S>) => Promise<FetchPageResult<Q, L, R, S, T>>;
declare const __EXPERIMENTAL__NOT_SUPPORTED_YET__fetchPageByRid: Experiment<"2.2.0", "__EXPERIMENTAL__NOT_SUPPORTED_YET__fetchPageByRid", {
    fetchPageByRid: fetchPageByRidFn;
}>;

interface EXPERIMENTAL_BulkLinkResult {
    object: OsdkBase<any>;
    linkApiName: string;
    otherObjectApiName: string | undefined;
    otherObjectPk: unknown;
}

type getBulkLinksFn = <T extends ObjectOrInterfaceDefinition>(objs: Osdk.Instance<T>[], links: string[]) => AsyncGenerator<EXPERIMENTAL_BulkLinkResult, void, undefined>;
declare const __EXPERIMENTAL__NOT_SUPPORTED_YET__getBulkLinks: Experiment<"2.0.8", "__EXPERIMENTAL__NOT_SUPPORTED_YET__getBulkLinks", {
    getBulkLinks: getBulkLinksFn;
}>;

export { type EXPERIMENTAL_BulkLinkResult, type Experiment, type ExperimentFns, __EXPERIMENTAL__NOT_SUPPORTED_YET__createMediaReference, __EXPERIMENTAL__NOT_SUPPORTED_YET__fetchOneByRid, __EXPERIMENTAL__NOT_SUPPORTED_YET__fetchPageByRid, __EXPERIMENTAL__NOT_SUPPORTED_YET__getBulkLinks };
