import type * as OntologiesV2 from "@osdk/foundry.ontologies";
import type { FauxAttachmentStore } from "./FauxAttachmentStore.js";
import type { FauxDataStoreBatch } from "./FauxDataStoreBatch.js";
import type { TH_ApplyActionRequestV2 } from "./typeHelpers/TH_ApplyActionRequestV2.js";
export type FauxActionImpl<Q extends OntologiesV2.ActionTypeV2 = OntologiesV2.ActionTypeV2> = (batch: FauxDataStoreBatch, payload: TH_ApplyActionRequestV2<Q>, ctx: {
	def: Q
	attachments: FauxAttachmentStore
}) => unknown;
