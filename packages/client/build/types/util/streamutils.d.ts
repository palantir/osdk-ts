export declare function parseStreamedResponse(asyncIterable: AsyncIterable<Uint8Array>): AsyncGenerator<any, void, unknown>;
export declare function iterateReadableStream(readableStream: ReadableStreamDefaultReader<Uint8Array>): AsyncGenerator<Uint8Array, void, unknown>;
