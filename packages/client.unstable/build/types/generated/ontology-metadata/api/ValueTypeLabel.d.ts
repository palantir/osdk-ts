/**
* Similar to a unit, but for non-numeric properties. For example, two properties which both represent
* severities might share the same set of possible values, say 'HIGH', 'MEDIUM' or 'LOW'. You could then
* plot these together on the same axis on a chart with "Severity" as the label by specifying "Severity"
* as the `valueTypeLabel` for both properties.
*
* This can be a maximum of 50 characters.
*/
export type ValueTypeLabel = string;
