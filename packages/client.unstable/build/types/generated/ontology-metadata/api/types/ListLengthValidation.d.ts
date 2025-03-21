/**
* Optionally specifies the min and max parameter list lengths permitted for a parameter. This type is only
* usable with list type parameters.
*/
export interface ListLengthValidation {
	minLength: number | undefined;
	maxLength: number | undefined;
}
