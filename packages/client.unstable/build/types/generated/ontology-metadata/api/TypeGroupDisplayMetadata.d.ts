import type { TypeGroupIconColors } from "./TypeGroupIconColors.js";
/**
* This includes metadata which can be used by front-ends when displaying a type group.
*/
export interface TypeGroupDisplayMetadata {
	displayName: string;
	description: string | undefined;
	iconColors: TypeGroupIconColors;
}
