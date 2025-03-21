/**
* Extracts the date from a ISO 8601 formatted date time string. Throws if the input is not in the correct format.
*
* @param dateTime An ISO 8601 formatted date time string
* @returns The date part of the input string
*/
export declare const extractDate: (dateTime: string) => string;
/**
* Generates a string representation of the input date (YYYY-MM-DD). The resulting date string reflects the given date in UTC time.
*
* @param date
* @returns The date part of a ISO 8601 formatted date time string
*/
export declare const extractDateInUTC: (date: Date) => string;
/**
* Generates a string representation of the input date (YYYY-MM-DD). The resulting date string reflects the given date in the local time zone.
*
* @param date
* @returns The date part of a ISO 8601 formatted date time string
*/
export declare const extractDateInLocalTime: (date: Date) => string;
