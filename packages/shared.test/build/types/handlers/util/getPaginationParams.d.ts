import type { PageToken } from "@osdk/foundry.core";
import type { LoadObjectSetRequestV2 } from "@osdk/internal.foundry.ontologies";
import type { StrictRequest } from "msw";
export declare function getPaginationParamsFromUrl(request: StrictRequest<any>): {
	pageSize: number | undefined
	pageToken: PageToken | undefined
};
export declare function getPaginationParamsFromRequest({ pageSize, pageToken }: Pick<LoadObjectSetRequestV2, "pageToken" | "pageSize">): {
	pageSize: number | undefined
	pageToken: PageToken | undefined
};
