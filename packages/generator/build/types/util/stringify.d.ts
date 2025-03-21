/**
* A function for changing the stringified key/value pairs of an object.
*
* @param value The value of the key/value pair.
* @param defaultValueFormatter The function that would be called if this customizer wasn't used
* @param key The key of the key/value pair.
* @param defaultKeyFormatter The function that would be called if this customizer wasn't used
*
* @returns A string, a tuple of strings, or undefined.
*          If a string is returned, it will be used as the value of the key/value pair.
*          If a tuple of strings is returned, the first string will be used as the key of the key/value pair
*          and the second string will be used as the value of the key/value pair.
*          If undefined is returned, the pair will be removed
*/
type Customizer<
	K extends string | symbol | number,
	V extends {}
> = (value: V, defaultValueFormatter: (value: any) => string, key: K extends "*" ? string : K, defaultKeyFormatter: (key: string) => string) => [string, string] | string | undefined;
export declare function stringify<T extends Record<string, any>>(obj: T, customizer?: { [K in keyof T | "*"]? : Customizer<K, T[K]> }, separator?: string): string;
export {};
