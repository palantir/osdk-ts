import type { Observer, Unsubscribable } from "@osdk/client/unstable-do-not-use";
export type Snapshot<X> = X | (Partial<X> & {
	error: Error
}) | undefined;
export declare function makeExternalStore<X>(createObservation: (callback: Observer<X | undefined>) => Unsubscribable, name?: string): {
	subscribe: (notifyUpdate: () => void) => () => void
	getSnapShot: () => Snapshot<X>
};
