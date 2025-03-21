/** Helper object to make sure property descriptors are declared correctly */
export type PropertyDescriptorRecord<X> = { [K in keyof X] : PropertyDescriptor & {
	get?: () => X[K]
	value?: X[K]
} };
