export type StringArrayToUnion<T extends string | readonly string[]> =
  T extends ReadonlyArray<infer U> ? U : T;
