import type { OptimisticBuilder } from "../OptimisticBuilder.js";
import { type Changes } from "./Changes.js";
import { type OptimisticId } from "./OptimisticId.js";
import type { Store } from "./Store.js";
export declare class OptimisticJob {
	#private;
	context: OptimisticBuilder;
	getResult: () => Promise<Changes>;
	constructor(store: Store, optimisticId: OptimisticId);
}
export declare function runOptimisticJob(store: Store, optimisticUpdate: undefined | ((ctx: OptimisticBuilder) => void)): () => Promise<void>;
