export interface SecurityGroupComparisonConstant_string {
	type: "string";
	string: string;
}
export interface SecurityGroupComparisonConstant_boolean {
	type: "boolean";
	boolean: boolean;
}
export interface SecurityGroupComparisonConstant_strings {
	type: "strings";
	strings: Array<string>;
}
/**
* A value represented by a constant.
*/
export type SecurityGroupComparisonConstant = SecurityGroupComparisonConstant_string | SecurityGroupComparisonConstant_boolean | SecurityGroupComparisonConstant_strings;
