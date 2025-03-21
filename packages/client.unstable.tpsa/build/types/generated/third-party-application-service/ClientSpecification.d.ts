import type { ConfidentialClient } from "./ConfidentialClient.js";
import type { PublicClient } from "./PublicClient.js";
export interface ClientSpecification_confidential {
	type: "confidential";
	confidential: ConfidentialClient;
}
export interface ClientSpecification_public {
	type: "public";
	public: PublicClient;
}
export type ClientSpecification = ClientSpecification_confidential | ClientSpecification_public;
