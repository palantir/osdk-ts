export type NullableProps<T extends Record<string, {
	nullable?: boolean
}>> = keyof { [K in keyof T as T[K]["nullable"] extends true ? K : never] : "" };
