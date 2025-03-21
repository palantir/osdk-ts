import type * as OntologiesV2 from "@osdk/foundry.ontologies";
export declare function filterTimeSeriesData(data: OntologiesV2.TimeSeriesPoint[], { range }: OntologiesV2.StreamTimeSeriesPointsRequest, now?: Date): OntologiesV2.TimeSeriesPoint[];
