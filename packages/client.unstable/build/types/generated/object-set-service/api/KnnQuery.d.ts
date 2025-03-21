import type { Vector } from "./Vector.js";
export interface KnnQuery_vector {
	type: "vector";
	vector: Vector;
}
export interface KnnQuery_text {
	type: "text";
	text: string;
}
/**
* Supported ways to query using knn. Can either use a vector directly, or use text which will get embedding using
* the model specified in the Ontology.
*/
export type KnnQuery = KnnQuery_vector | KnnQuery_text;
