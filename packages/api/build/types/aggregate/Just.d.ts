export type Just<
	Z extends keyof V,
	V
> = { [k in Z] : V[k] } & { [k in keyof V as k extends Z ? never : k]? : never };
export type NeverThese<V extends string | symbol | number> = { [k in V]? : never };
