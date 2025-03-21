import type { FetchPageArgs, SelectArg } from "../object/FetchPageArgs.js";
import type { Result } from "../object/Result.js";
import type { ObjectSet } from "../objectSet/ObjectSet.js";
import type { PropertyKeys } from "../ontology/ObjectOrInterface.js";
import type { CompileTimeMetadata, ObjectMetadata, ObjectTypeDefinition, ObjectTypeLinkKeysFrom2 } from "../ontology/ObjectTypeDefinition.js";
import type { ExtractOptions, Osdk } from "../OsdkObjectFrom.js";
/** The $link container to get from one object type to its linked objects */
export type OsdkObjectLinksObject<O extends ObjectTypeDefinition> = ObjectTypeLinkKeysFrom2<O> extends never ? never : { readonly [L in ObjectTypeLinkKeysFrom2<O>] : OsdkObjectLinksEntry<O, L> };
export type OsdkObjectLinksEntry<
	Q extends ObjectTypeDefinition,
	L extends ObjectTypeLinkKeysFrom2<Q>
> = CompileTimeMetadata<Q>["links"][L] extends ObjectMetadata.Link<infer T, infer M> ? (M extends false ? SingleLinkAccessor<T> : ObjectSet<T>) : never;
export type DefaultToFalse<B extends boolean | undefined> = false extends B ? false : undefined extends B ? false : true;
export interface SingleLinkAccessor<T extends ObjectTypeDefinition> {
	/** Load the linked object
	*/
	fetchOne: <const A extends SelectArg<T, PropertyKeys<T>, boolean>>(options?: A) => Promise<A extends FetchPageArgs<T, infer L, infer R, any, infer S> ? Osdk.Instance<T, ExtractOptions<R, S>, L> : Osdk.Instance<T>>;
	/** Load the linked object, with a result wrapper
	*/
	fetchOneWithErrors: <const A extends SelectArg<T, PropertyKeys<T>, boolean>>(options?: A) => Promise<Result<A extends FetchPageArgs<T, infer L, infer R, any, infer S> ? Osdk.Instance<T, ExtractOptions<R, S>, L> : Osdk.Instance<T>>>;
}
