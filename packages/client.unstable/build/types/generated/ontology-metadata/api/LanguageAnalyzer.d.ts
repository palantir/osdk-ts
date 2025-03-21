/**
* A language-specific analyzer. Since some aren't provided natively with Elasticsearch, ontology-metadata cannot
* guarantee that a given language-specific analyzer will be available for use.
*/
export type LanguageAnalyzer = "FRENCH" | "JAPANESE" | "ARABIC" | "COMBINED_ARABIC_ENGLISH";
