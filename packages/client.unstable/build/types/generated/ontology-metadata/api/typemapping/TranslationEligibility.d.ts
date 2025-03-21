import type { TranslatableDatasource } from "./TranslatableDatasource.js";
import type { UntranslatableSecurity } from "./UntranslatableSecurity.js";
export interface TranslationEligibility_translatableDatasource {
	type: "translatableDatasource";
	translatableDatasource: TranslatableDatasource;
}
export interface TranslationEligibility_untranslatableSecurity {
	type: "untranslatableSecurity";
	untranslatableSecurity: UntranslatableSecurity;
}
export type TranslationEligibility = TranslationEligibility_translatableDatasource | TranslationEligibility_untranslatableSecurity;
