import { listObjectsFromObjectSetV2 } from "#net";
import type {
  OntologyDefinition,
  ObjectTypesFrom,
  PropertyKeysFrom,
  OsdkObjectFrom,
} from "#ontology";
import type { NOOP } from "#util";
import type { Wire } from "#net";
import type { PageResult } from "../PageResult";
import type { ThinClient } from "../ThinClient";

export interface FetchPageOrThrowArgs<
  O extends OntologyDefinition<any>,
  K extends ObjectTypesFrom<O>,
  L extends PropertyKeysFrom<O, K>,
> {
  select?: readonly L[];
  nextPageToken?: string;
}

export async function fetchPageOrThrow<
  O extends OntologyDefinition<any>,
  T extends ObjectTypesFrom<O>,
  const A extends FetchPageOrThrowArgs<O, T, PropertyKeysFrom<O, T>>,
>(
  client: ThinClient<O>,
  objectType: T,
  args: A,
  objectSet: Wire.ObjectSet = {
    type: "base",
    objectType,
  },
): Promise<
  PageResult<
    NOOP<
      OsdkObjectFrom<
        T,
        O,
        A["select"] extends readonly string[]
          ? A["select"][number]
          : PropertyKeysFrom<O, T>
      >
    >
  >
> {
  const body: Wire.LoadObjectSetRequestV2 = {
    objectSet,
    // We have to do the following case because LoadObjectSetRequestV2 isnt readonly
    select: (args?.select ?? []) as unknown as string[], // FIXME?
  };

  if (args?.nextPageToken) {
    body.pageToken = args.nextPageToken;
  }

  const r = await listObjectsFromObjectSetV2(
    client.fetchJson,
    client.stack,
    client.ontology.metadata.ontologyApiName,
    body,
  );

  return {
    data: r.data.map((d) => ({ ...d, __name: objectType })),
    nextPageToken: r.nextPageToken,
  } as any;
}
