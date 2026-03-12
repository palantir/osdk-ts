import type {
  AggregateOpts,
  CompileTimeMetadata,
  PropertyKeys,
  ValidAggregationKeysWithStructs,
} from "@osdk/api";
import type { McAirportStruct } from "@osdk/e2e.generated.catchall";

type AddressType = CompileTimeMetadata<
  typeof McAirportStruct
>["properties"]["airportStruct"]["type"];

type Test1 = AddressType extends Record<string, unknown> ? "yes" : "no";
const t1: Test1 = "yes";

type AllProps = keyof CompileTimeMetadata<typeof McAirportStruct>["properties"];
const allProps: AllProps = "airportStruct";

type PropKeys = PropertyKeys<typeof McAirportStruct>;
const pk: PropKeys = "airportStruct";

type ValidKeys = ValidAggregationKeysWithStructs<typeof McAirportStruct>;
const vk: ValidKeys = "airportStruct";

type AggOpts = AggregateOpts<typeof McAirportStruct>;
const opts: AggOpts = {
  $select: {
    $count: "unordered",
    airportStruct: {
      "code:approximateDistinct": "unordered",
    },
  },
};

export {};
