import type { StrictRequest } from "msw";
export declare function requireSearchParams<T extends string>(names: T[], req: StrictRequest<any>): Record<T, string>;
