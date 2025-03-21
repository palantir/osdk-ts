/**
* Map integer to human-interpretable values. For example:
* - 0 -> Not assigned
* - 1 -> Assigned
* - 2 -> Closed
*
* Ontology design note: string enums are preferable. Like any formatter that changes the rendered values, this
* can behave strangely for certain features (e.g. sorting won't be alphabetic, but on the underlying ordering).
*/
export interface NumberFormatOrdinal {
	values: Record<number, string>;
}
