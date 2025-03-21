export type Integer<T extends number = number> = T & {
	__integerBrand?: void
};
export type Float<T extends number = number> = T & {
	__floatBrand?: void
};
export type Double<T extends number = number> = T & {
	__doubleBrand?: void
};
export type Long<T extends string = string> = T & {
	__longBrand?: void
};
export type DateISOString<T extends string = string> = T & {
	__dateBrand?: void
};
export type TimestampISOString<T extends string = string> = T & {
	__timestampBrand?: void
};
