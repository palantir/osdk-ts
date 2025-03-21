/**
* Type Classes comprise a kind and name field, where the kind field can provide a useful namespace for
* the TypeClass. Type Classes are normally used to store additional metadata on the properties which
* may be used by Hubble and various plugins when rendering the property in the front-end.
*/
export interface TypeClass {
	kind: string;
	name: string;
}
