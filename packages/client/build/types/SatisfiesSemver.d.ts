import type { GreaterThan, GreaterThanOrEqual, IsEqual, LessThan } from "type-fest";
export type VersionString<
	Major extends number,
	Minor extends number,
	Patch extends number
> = `${Major}.${Minor}.${Patch}`;
export type SatisfiesSemver<
	E extends VersionString<any, any, any>,
	C extends VersionString<any, any, any>
> = E extends VersionString<infer ExpMajor, infer ExpMinor, infer ExpPatch> ? C extends VersionString<infer CurMajor, infer CurMinor, infer CurPatch> ? (IsEqual<CurMajor, ExpMajor> extends false ? false : LessThan<CurMinor, ExpMinor> extends true ? false : GreaterThan<CurMinor, ExpMinor> extends true ? true : GreaterThanOrEqual<CurPatch, ExpPatch>) : false : false;
