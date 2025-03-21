export declare function getResults<T extends {
	results: any[]
}>(x: T): T["results"];
export declare function applyPageToken<
	X,
	T extends {
		pageToken: X | undefined
	}
>(payload: T, { pageToken }: {
	pageToken: X | undefined
}): typeof payload | undefined;
export declare function pageRequestAsAsyncIter<
	P,
	Z,
	R
>(call: (payload: P) => Promise<R>, values: (x: R) => Iterable<Z>, nextArgs: (previousPayload: P, previousResult: R) => P | undefined, initialPayload: P): AsyncGenerator<Awaited<Z>, void, unknown>;
