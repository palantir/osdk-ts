import type { Token } from "./Token.js";
export type Events = {
	signIn: CustomEvent<Token>
	signOut: Event
	refresh: CustomEvent<Token>
};
export interface BaseOauthClient<K extends keyof Events & string> {
	(): Promise<string>;
	getTokenOrUndefined: () => string | undefined;
	signIn: () => Promise<Token>;
	signOut: () => Promise<void>;
	addEventListener: <T extends K>(type: T, listener: ((evt: Events[T]) => void) | null, options?: boolean | AddEventListenerOptions) => void;
	removeEventListener: <T extends K>(type: T, callback: ((evt: Events[T]) => void) | null, options?: EventListenerOptions | boolean) => void;
}
