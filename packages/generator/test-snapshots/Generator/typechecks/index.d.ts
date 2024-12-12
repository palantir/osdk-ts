declare module "@my/package/a" {
  import { b } from "@my/package/b";
  import * as AllOfB from "@my/package/b";
  import type { B } from "@my/package/b";
  import type * as AllOfBTypes from "@my/package/b";
  export * as ExportedB from "@my/package/b";
  export type { B as C } from "@my/package/b";

  export const a: { b: B };
}
declare module "@my/package/b" {
  export interface B {
    hi: string;
  }
  export const b: B;
}
