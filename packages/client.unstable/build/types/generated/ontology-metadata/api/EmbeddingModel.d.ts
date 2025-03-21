import type { TextEmbeddingModel } from "./TextEmbeddingModel.js";
export interface EmbeddingModel_text {
	type: "text";
	text: TextEmbeddingModel;
}
export type EmbeddingModel = EmbeddingModel_text;
