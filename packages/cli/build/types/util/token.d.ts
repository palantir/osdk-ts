/**
* Loads a JWT Auth Token from an argument, a file, or environment variable returning the first found.
* @param token The token as a string.
* @param tokenFile The path to the token file.
* @returns The token as a string.
* @throws An error if no token is found.
*/
export declare function loadToken(token?: string, tokenFile?: string): Promise<string>;
interface LoadedToken {
	filePath: string;
	token: string;
}
/**
* Reads a JWT Auth Token from a file.
* @param filePath The path to the token file.
* @returns The token as a string.
* @throws An error if the file cannot be read.
*/
export declare function loadTokenFile(filePath: string): Promise<LoadedToken>;
export declare function validate(token: string): void;
export {};
