import type { MediaItemRid, MediaReference, MediaType } from "@osdk/foundry.core";
import type * as OntologiesV2 from "@osdk/foundry.ontologies";
import type { PagedBodyResponseWithTotal } from "../handlers/util/pageThroughResponseSearchParams.js";
import type { BaseServerObject } from "./BaseServerObject.js";
import type { FauxAttachmentStore } from "./FauxAttachmentStore.js";
import type { FauxOntology } from "./FauxOntology.js";
export interface MediaMetadataAndContent {
	content: ArrayBuffer;
	mediaRef: MediaReference;
	metaData: OntologiesV2.MediaMetadata;
}
export declare class FauxDataStore {
	#private;
	constructor(fauxOntology: FauxOntology, attachments: FauxAttachmentStore);
	get ontology(): FauxOntology;
	registerObject(obj: BaseServerObject): void;
	replaceObjectOrThrow(x: BaseServerObject): void;
	/** Throws if the object does not already exist */
	unregisterObjectOrThrow(objectType: string, primaryKey: string | number | boolean): void;
	registerLink(src: BaseServerObject, srcLinkName: string, dst: BaseServerObject, destLinkName: string): void;
	unregisterLink(src: BaseServerObject, srcLinkName: string, dst: BaseServerObject, dstLinkName: string): void;
	registerTimeSeriesData(objectType: OntologiesV2.ObjectTypeApiName, primaryKey: string, property: OntologiesV2.PropertyApiName, data: OntologiesV2.TimeSeriesPoint[]): void;
	getTimeSeriesData(objectType: OntologiesV2.ObjectTypeApiName, primaryKey: string, property: OntologiesV2.PropertyApiName, filter?: OntologiesV2.StreamTimeSeriesPointsRequest): OntologiesV2.TimeSeriesPoint[];
	registerMedia(objectType: OntologiesV2.ObjectTypeApiName, property: OntologiesV2.PropertyApiName, content: ArrayBuffer, mediaType: MediaType, path: string | undefined, mediaItemRid?: MediaItemRid): MediaReference;
	getMediaOrThrow(objectType: OntologiesV2.ObjectTypeApiName, primaryKey: string, property: OntologiesV2.PropertyApiName): MediaMetadataAndContent;
	getObject(apiName: string, primaryKey: string | number | boolean): BaseServerObject | undefined;
	getObjectOrThrow(apiName: string, primaryKey: string | number | boolean): BaseServerObject;
	getObjectByRid(rid: string): BaseServerObject | undefined;
	getLinksOrThrow(apiName: string, primaryKey: string | number | boolean, linkApiName: string): BaseServerObject[];
	getLinkOrThrow(objectType: string, primaryKey: string | number | boolean, linkType: string, targetPrimaryKey: string | number | boolean): BaseServerObject;
	getObjectsOfType(apiName: string): Iterable<BaseServerObject>;
	getObjectsFromObjectSet(parsedBody: OntologiesV2.LoadObjectSetV2MultipleObjectTypesRequest | OntologiesV2.LoadObjectSetRequestV2): PagedBodyResponseWithTotal<BaseServerObject>;
	getAttachmentMetadata(objectType: string, primaryKey: string | number | boolean, propertyName: string): OntologiesV2.AttachmentV2;
	getAttachmentBuffer(objectType: string, primaryKey: string | number | boolean, propertyName: string): ArrayBuffer;
	applyAction(actionTypeApiName: string, req: OntologiesV2.ApplyActionRequestV2): OntologiesV2.SyncApplyActionResponseV2;
	batchApplyAction(actionTypeApiName: string, batchReq: OntologiesV2.BatchApplyActionRequestV2): OntologiesV2.BatchApplyActionResponseV2;
}
