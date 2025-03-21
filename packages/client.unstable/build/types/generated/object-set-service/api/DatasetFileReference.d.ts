import type { CatalogFileReference } from "./CatalogFileReference.js";
/**
* Reference to a dataset containing the media with an optional thumbnail reference.
*/
export interface DatasetFileReference {
	fileReference: CatalogFileReference;
	thumbnailReference: CatalogFileReference | undefined;
}
