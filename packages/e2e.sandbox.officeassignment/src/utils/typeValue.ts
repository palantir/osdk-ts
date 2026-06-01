/**
 * Helper for the combined StatusUpdate.typeValue field, formatted as `"{type} - {value}"`
 * (e.g. "WorkMode - Remote"). The separator is space-hyphen-space.
 */
const TYPE_VALUE_SEPARATOR = " - ";

export function makeTypeValue(type: string, value: string): string {
  return `${type}${TYPE_VALUE_SEPARATOR}${value}`;
}
