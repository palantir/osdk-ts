import type { FetchAsJsonFn } from "#util";
import { V2_BASE } from "./V2_BASE";
import type {
  LoadObjectSetRequestV2,
  OntologyObjectV2,
  PagedResponse,
} from "./types";

export default async function listObjectsFromObjectSetV2(
  fetchAsJson: FetchAsJsonFn,
  foundryHost: string,
  ontologyApiName: string,
  body: LoadObjectSetRequestV2,
): Promise<PagedResponse<OntologyObjectV2>> {
  return fetchAsJson(
    new URL(
      `${V2_BASE}/${ontologyApiName}/objectSets/loadObjects`,
      `https://${foundryHost}`,
    ),
    {
      method: "POST",
      body,
    },
  );
}
