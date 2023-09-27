import type { FetchAsJsonFn } from "#util";
import { V2_BASE } from "./V2_BASE";
import type { AggregateObjectsV2Body, AggregationAPIResponse } from "./types";

export default async function aggregateObjectsV2(
  fetchAsJson: FetchAsJsonFn,
  foundryHost: string,
  ontologyApiName: string,
  objectApiName: string,
  body: AggregateObjectsV2Body,
): Promise<AggregationAPIResponse> {
  const aggregateObjectsUrl = new URL(
    `${V2_BASE}/${ontologyApiName}/objects/${objectApiName}/aggregate`,
    `https://${foundryHost}`,
  );

  return fetchAsJson(aggregateObjectsUrl, {
    method: "POST",
    body,
  });
}
