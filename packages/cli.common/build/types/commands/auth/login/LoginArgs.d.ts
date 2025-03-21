import type { CommonAuthArgs } from "../CommonAuthArgs.js";
export interface LoginArgs extends CommonAuthArgs {
	clientId: string;
}
