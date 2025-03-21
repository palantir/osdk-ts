export declare class RefCounts<T extends {}> {
	private keepAlive;
	private cleanup;
	private refCounts;
	private gcMap;
	constructor(keepAlive: number, cleanup: (key: T) => void);
	register<X extends T>(key: X): X;
	retain(key: T): void;
	release(key: T): void;
	has(key: T): boolean;
	gc(): void;
}
