import type { LanguageAnalyzer } from "./LanguageAnalyzer.js";
import type { NotAnalyzedAnalyzer } from "./NotAnalyzedAnalyzer.js";
import type { SimpleAnalyzer } from "./SimpleAnalyzer.js";
import type { StandardAnalyzer } from "./StandardAnalyzer.js";
import type { WhitespaceAnalyzer } from "./WhitespaceAnalyzer.js";
export interface Analyzer_notAnalyzed {
	type: "notAnalyzed";
	notAnalyzed: NotAnalyzedAnalyzer;
}
export interface Analyzer_simpleAnalyzer {
	type: "simpleAnalyzer";
	simpleAnalyzer: SimpleAnalyzer;
}
export interface Analyzer_standardAnalyzer {
	type: "standardAnalyzer";
	standardAnalyzer: StandardAnalyzer;
}
export interface Analyzer_whitespaceAnalyzer {
	type: "whitespaceAnalyzer";
	whitespaceAnalyzer: WhitespaceAnalyzer;
}
export interface Analyzer_languageAnalyzer {
	type: "languageAnalyzer";
	languageAnalyzer: LanguageAnalyzer;
}
/**
* Union wrapping the various analyzer configurations available for StringPropertyType(s).
* The analyzer determines how the PropertyType is indexed and made available for searches.
*/
export type Analyzer = Analyzer_notAnalyzed | Analyzer_simpleAnalyzer | Analyzer_standardAnalyzer | Analyzer_whitespaceAnalyzer | Analyzer_languageAnalyzer;
