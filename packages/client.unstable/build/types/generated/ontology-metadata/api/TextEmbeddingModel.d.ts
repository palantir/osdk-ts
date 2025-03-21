import type { FoundryLiveDeployment } from "./FoundryLiveDeployment.js";
import type { LmsEmbeddingModel } from "./LmsEmbeddingModel.js";
export interface TextEmbeddingModel_lms {
	type: "lms";
	lms: LmsEmbeddingModel;
}
export interface TextEmbeddingModel_foundryLiveDeployment {
	type: "foundryLiveDeployment";
	foundryLiveDeployment: FoundryLiveDeployment;
}
export type TextEmbeddingModel = TextEmbeddingModel_lms | TextEmbeddingModel_foundryLiveDeployment;
