import type { MediaReference } from "../object/Media.js";
import type { FilteredPropertyKeys } from "../ontology/FilteredPropertyKeys.js";
import type { ObjectOrInterfaceDefinition } from "../ontology/ObjectOrInterface.js";
import type { Experiment } from "./Experiment.js";
/**
* @experimental This feature is experimental and might change in the future.
*
* Uploads a media item to the media property of the specified object type.
*
* @param data - Data to upload as media item
* @param fileName - Name that will be assigned as path to the uploaded media item.
* @param objectType - Object type to which the media item will be uploaded.
* @param propertyType - Media reference property of the corresponding object type to which the media item will be uploaded.
*
* @returns media reference of the uploaded media item.
*/
type createMediaReference = <
	Q extends ObjectOrInterfaceDefinition,
	const L extends FilteredPropertyKeys<Q, "mediaReference">
>(args: {
	data: Blob
	fileName: string
	objectType: Q
	propertyType: L
}) => Promise<MediaReference>;
export declare const __EXPERIMENTAL__NOT_SUPPORTED_YET__createMediaReference: Experiment<"2.1.0", "__EXPERIMENTAL__NOT_SUPPORTED_YET__createMediaReference", {
	createMediaReference: createMediaReference
}>;
export {};
