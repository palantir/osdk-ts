export declare function createFetchHeaderMutator(fetchFn: typeof fetch | undefined, mutator: (headers: Headers) => Promise<Headers> | Headers): typeof fetch;
