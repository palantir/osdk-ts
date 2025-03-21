import type { OntologyObject, OntologyObjectV2 } from "@osdk/foundry.ontologies";
import type { PagedBodyResponse, PagedBodyResponseWithTotal } from "./handlers/util/pageThroughResponseSearchParams.js";
export declare function subSelectPropertiesUrl<T extends OntologyObjectV2 | OntologyObject>(object: T, url: URL): T;
export declare function subSelectProperties<
	T extends OntologyObjectV2,
	TResponse extends PagedBodyResponse<T> | PagedBodyResponseWithTotal<T>,
	TIncludeCount extends (TResponse extends PagedBodyResponseWithTotal<T> ? true : false)
>(objects: PagedBodyResponse<T>, urlOrProperties: URL | string[], includeCount: TIncludeCount, excludeRid?: boolean): TIncludeCount extends true ? PagedBodyResponseWithTotal<T> : PagedBodyResponse<T>;
