export interface OriginResource_resourceIdentifier {
	type: "resourceIdentifier";
	resourceIdentifier: string;
}
/**
* Identifier of a resource. Can be an identifier of a job, transform, workshop app, workshop widget,
* Slate document, etc.
*/
export type OriginResource = OriginResource_resourceIdentifier;
