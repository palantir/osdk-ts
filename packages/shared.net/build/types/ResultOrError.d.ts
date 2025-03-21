export type ResultOrError<T extends object> = ({
	type: "ok"
	err?: never
} & T) | {
	type: "err"
	data?: never
	err?: unknown
};
export declare function isOk(result: ResultOrError<any>): result is {
	type: "ok"
};
