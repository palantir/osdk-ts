export type ErrorResult = {
	error: Error
	value?: never
};
export type OkResult<V> = {
	value: V
	error?: never
};
export type Result<V> = OkResult<V> | ErrorResult;
/**
* Check if a result was successfully received
* @param a - result wrapped value
* @returns whether a result has a value in it
*/
export declare function isOk<X>(a: Result<X>): a is OkResult<X>;
/**
* Check if a result contains an error value
* @param a Result wrapped value
* @returns whether a result has an error in it
*/
export declare function isError<X>(a: Result<X>): a is ErrorResult;
