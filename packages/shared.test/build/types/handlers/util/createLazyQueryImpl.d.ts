import type { ExecuteQueryRequest, ExecuteQueryResponse } from "@osdk/foundry.ontologies";
export declare function createLazyQueryImpl(bodyToResponse: Record<string, ExecuteQueryResponse>): (req: ExecuteQueryRequest) => ExecuteQueryResponse;
