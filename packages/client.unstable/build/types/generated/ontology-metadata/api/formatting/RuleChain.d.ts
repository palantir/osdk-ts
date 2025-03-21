import type { Rule } from "./Rule.js";
/**
* A rule chain will evaluate rules one-by-one first-to-last. The first matching rule (for which the condition
* is true) will apply the format, stopping evaluation of this chain. Use this to implement conditionals.
*/
export interface RuleChain {
	rules: Array<Rule>;
}
