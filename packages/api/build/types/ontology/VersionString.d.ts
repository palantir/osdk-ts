export type VersionString<
	Major extends number,
	Minor extends number,
	Patch extends number
> = `${Major}.${Minor}.${Patch}`;
