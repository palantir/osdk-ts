/**
* Use Result.ok() / Result.err() for constructing
*/
export type Result<
	T,
	E
> = Ok<T, E> | Err<T, E>;
export declare class Ok<
	T,
	E
> {
	value: T;
	constructor(value: T);
	isErr(): this is Err<T, E>;
	isOk(): this is Ok<T, E>;
	transform<
		U,
		V
	>(transformOk: (value: T) => Result<U, V>, _transformErr: (err: E) => Result<U, V>): Result<U, V>;
	map<U>(transformOk: (value: T) => U): Result<U, E>;
	mapErr<U>(_transformErr: (err: E) => U): Result<T, U>;
}
export declare class Err<
	T,
	E
> {
	error: E;
	constructor(error: E);
	isErr(): this is Err<T, E>;
	isOk(): this is Ok<T, E>;
	transform<
		U,
		V
	>(_transformOk: (value: T) => Result<U, V>, transformErr: (err: E) => Result<U, V>): Result<U, V>;
	map<U>(_transformOk: (value: T) => U): Result<U, E>;
	mapErr<U>(transformErr: (err: E) => U): Result<T, U>;
}
export declare const Result: {
	ok<
		T,
		E
	>(ok: T): Result<T, E>
	err<
		T,
		E
	>(err: E): Result<T, E>
	/**
	* Returns err E array if any result has an error.
	* Returns T array if all results are ok.
	*/
	coalesce<
		T,
		E
	>(results: Array<Result<T, E[]>>): Result<T[], E[]>
};
