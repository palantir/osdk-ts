import type { EmbeddingModel } from "./EmbeddingModel.js";
import type { VectorSimilarityFunction } from "./VectorSimilarityFunction.js";
/**
* Represents a fixed size vector of floats. These can be used for vector similarity searches.
*/
export interface VectorPropertyType {
	dimension: number;
	supportsSearchWith: Array<VectorSimilarityFunction>;
	embeddingModel: EmbeddingModel | undefined;
}
