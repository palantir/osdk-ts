export type Experiment<
	V extends string,
	T extends string = string,
	K extends Record<string, (...args: any[]) => any> = any
> = {
	type: "experiment"
	name: T
	branded?: K
	version: V
};
export type ExperimentFns<B extends Experiment<string, string>> = NonNullable<B["branded"]>;
