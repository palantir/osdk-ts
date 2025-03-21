import type { MinimalClient } from "../MinimalClientContext.js";
/**
* A simple cache that can be used to store values for a given client.
*/
interface ClientCache<
	K,
	V
> {
	get: (client: MinimalClient, key: K) => V;
	set: <X extends V>(client: MinimalClient, key: K, value: X) => X;
	remove: (client: MinimalClient, key: K) => boolean;
}
export declare function createClientCache<
	K,
	V extends {}
>(fn?: Factory<K, V>): typeof fn extends undefined ? ClientCache<K, V | undefined> : ClientCache<K, V>;
export {};
