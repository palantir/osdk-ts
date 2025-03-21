import type { Analyzer } from "./Analyzer.js";
export interface StringPropertyType {
	analyzerOverride: Analyzer | undefined;
	isLongText: boolean;
	supportsExactMatching: boolean;
	supportsEfficientLeadingWildcard: boolean | undefined;
	enableAsciiFolding: boolean | undefined;
}
